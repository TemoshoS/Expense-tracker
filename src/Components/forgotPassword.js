import { useState } from "react"
import { auth } from "../config/firebase"
import { sendPasswordResetEmail } from "firebase/auth"
const ResetPassword = () => {
    const forgotPassword = (() => {
        sendPasswordResetEmail(auth, email).then(() => {

            alert('check your email')
        }).catch((error) => {

        })

    })

    const [email, setPasword] = useState('')

    return (
        <div>
            <h4>Reset your password</h4>
            <input type="text" placeholder="enter email" onChange={(event) => setPasword(event.target.value)}></input> <br />
            <button onClick={forgotPassword}>Reset password</button>

        </div>
    )

}

export default ResetPassword