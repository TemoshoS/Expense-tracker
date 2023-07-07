import { createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

const initialState = {
    loading: false,
    error: null,
    data: []
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {

        addData: (state, action) => {
            state.data.push(action.payload);

        },
        fetchDataStart(state,action) {
            state.loading = true;
            state.error = null;
        },

        fetchDataSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;

        },

        fetchDataFailure(state, action) {
            state.loading = false;
            state.error = action.payload;

        },
        deleteData:(state, action)=>{

            const index = state.data.findIndex((item)=>item.id===action.payload);
            if(index !== -1){

                state.data.splice(index, 1)
            }
        }
    }
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, addData, deleteData } = dataSlice.actions;
export const fetchData = () => async (dispatch) => {
    dispatch(fetchDataStart());

    try {
        const querySnapShot = await getDocs(collection(db, "transactions"));
        const data = querySnapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        dispatch(fetchDataSuccess(data));

    } catch (error) {

        dispatch(fetchDataFailure(error))

    }
};

export const addTranscation = (data) => async (dispatch) => {



    try {
        const docRef = await addDoc(collection(db, "transacetions"), data);
        dispatch(addData(data));
        alert("added successfully")
    } catch (error) {

    }
}

export const deleteTransaction =(id)=> async(dispatch)=>{
    try {

        await deleteDoc(doc(db, "transactions", id));
        dispatch(deleteData(id))
        alert("Deleted successfully")
        
    } catch (error) {
        
    }
}

export default dataSlice.reducer