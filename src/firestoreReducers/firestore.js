import { createSlice } from "@reduxjs/toolkit";
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../config/firebase";

export const firestoreReducer = createSlice({
    name: "db",
    initialState: [{
        transactionItem: "",
        amount: "",
        transactionType: ""
    },
],

    reducers: {
        addTranscation: async (state, action) => {

            try {
                const docRef = await addDoc(
                    collection(db, "transactions"),
                    action.payload
                    );

                alert("added successfully")
            } catch (error) {

            }



        }
    }
})

export const { addTranscation } = firestoreReducer.actions;
export default firestoreReducer.reducer