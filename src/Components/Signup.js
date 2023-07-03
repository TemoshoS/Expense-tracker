import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../config/firebase'


const Signup=()=>{
const [email, setEmail] = useState('')
const [pasword, setPasword] = useState('')


const register=()=>{

    createUserWithEmailAndPassword(auth, email, pasword).then(()=>{
       alert('success')
    }).catch((error)=>{
        alert('please enter atleast 7 digits')
        console.log(error.message);
    })

}


    return (
        <div>
            <h1 style={{textAlign:'center'}}>Signup</h1>

            <label>Username</label> <br/>
            <input type="text"  value={email} onChange={(event)=>setEmail(event.target.value)}/><br/>
            
            <label>Password</label> <br/>
            <input type='text' value={pasword} onChange={(event)=>setPasword(event.target.value)}></input> <br/>
            
             <button onClick={register}>Submit</button>
           <p> already registered? <Link to='/'>login</Link></p>


        </div>
    )
}

export default Signup