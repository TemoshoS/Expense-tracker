import { useState } from "react"
import { auth } from "../config/firebase"
import { sendPasswordResetEmail } from "firebase/auth"
import { useDispatch } from "react-redux"
import { passwordReset } from "../authReducer/auth"

const ResetPassword = () => {

    const dispatch = useDispatch();
    const [email, setPasword] = useState('')

    const forgotPassword = (() => {
        dispatch(passwordReset(email))

    })



    return (
        <div>
            <h4>Reset your password</h4>
            <input type="text" placeholder="enter email" onChange={(event) => setPasword(event.target.value)}></input> <br />
            <button onClick={forgotPassword}>Reset password</button>

        </div>
    )

}

export default ResetPassword