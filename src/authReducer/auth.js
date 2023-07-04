import { createSlice } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:{
            email: "",
            password: ""
        }

    },

    reducers:{

        signUp:(state, action) => {
            createUserWithEmailAndPassword(auth, action.payload, action.payload)
            .then(() => {
                alert('success')
            }).catch((error) => {
                alert('please enter atleast 7 digits')
                console.log(error.message);
            });


        }
    }
})

export const { signUp } = authSlice.actions;
export default authSlice.reducer