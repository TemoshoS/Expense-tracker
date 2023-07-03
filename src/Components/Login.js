import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    const goTohomePage = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            alert("Log in successfully")
            navigate("/home")


        }).catch((error) => {
            console.log(error.message)

        })
    }


    return (

        <div>
            <h1>Login Page</h1>

            <input placeholder="enter email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input><br></br>
            <input placeholder="enter password" type="text" value={password} onChange={(event) => setPasword(event.target.value)}></input><br></br>


            <button onClick={goTohomePage}>Login</button> <br></br>

            <Link to='/forgotpassword'>Forgot Password</Link><br/>
            <Link to='/register'>Don't have an account : Sign Up</Link>

        </div>
    )


}

export default Login