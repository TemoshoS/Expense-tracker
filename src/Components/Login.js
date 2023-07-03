import { useState } from "react"
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
const Login =()=> {

    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    signInWithEmailAndPassword()



    return (

        <div>
                  <h1>Login Page</h1>
                  
                  <input placeholder="enter email" type="text" value={email} onChange={(event)=>setEmail(event.target.value)}></input><br></br>
                  <input placeholder="enter password" type="text" value={password} onChange={(event)=>setPasword(event.target.value)}></input><br></br>
                  

                  <button>Go to home page</button> <br></br>
                  
                  <Link to='/register'>register</Link>

        </div>
    )


}

export default Login