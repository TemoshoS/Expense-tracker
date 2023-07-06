import { createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'

const initialState = {
    loading: false,
    error: null,
    data: []
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        fetchDataStart(state) {
            state.loading = true;
            state.error = null;
        },

        fetchDataSuccess(state,action) {
            state.loading = false;
            state.data = action.payload;

        },

        fetchDataFailure(state,action) {
            state.loading = false;
            state.error = action.payload

        }
    }
})

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;
export const fetchData = () => async (dispatch) => {
    dispatch(fetchDataStart())
    try {
        const querySnapShot = await getDocs(collection(db, "transactions"));
        const data = querySnapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))

    } catch (error) {

        dispatch(fetchDataFailure(error))

    }
}

export default dataSlice.reducer