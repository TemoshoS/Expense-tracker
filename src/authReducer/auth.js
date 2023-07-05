import { createSlice } from "@reduxjs/toolkit";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../config/firebase";



export const authSlice = createSlice({


    name: "auth",
    initialState: {
        user: {
            email: "",
            password: ""
        }

    },

    reducers: {

        signUp: (state, action) => {
            createUserWithEmailAndPassword(auth, action.payload, action.payload)
                .then(() => {
                    alert('Registered successfully')
                }).catch((error) => {
                    alert('please enter atleast 7 digits')
                    console.log(error.message);
                });


        },

        signIn: (state, action) => {
            signInWithEmailAndPassword(auth, action.payload, action.payload).then(() => {

                alert("Logged in successfully")

            }).catch((error) => {

                console.log(action.payload)
                console.log(action.payload)
                console.log(error.message)
            })
        },

        signingOut: () => {

            signOut(auth)
                .then(() => {

                    return true;

                }).catch((error) => {

                })

        },

        passwordReset: (state, action) => {
            sendPasswordResetEmail(auth, action.payload).then(() => {
                alert('Please check your email')
            }).catch((error) => {

            })

        }
    }
})

export const { signUp, signIn, signingOut, passwordReset } = authSlice.actions;
export default authSlice.reducer