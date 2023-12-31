import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import {useDispatch} from 'react-redux'
import { signIn } from "../authReducer/auth";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    const dispatch = useDispatch();
    


    return (

        <div>
            <h1>Login Page</h1>

            <input placeholder="enter email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input><br></br>
            <input placeholder="enter password" type="text" value={password} onChange={(event) => setPasword(event.target.value)}></input><br></br>


            <button onClick={()=>dispatch(signIn(email, password))}>Login</button> <br></br>

            <Link to='/forgotpassword'>Forgot Password</Link><br/>
            <Link to='/register'>Don't have an account : Sign Up</Link>

        </div>
    )


}

export default Login