import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../config/firebase'

import {  useSelector, useDispatch } from 'react-redux'
import { signUp } from '../authReducer/auth'



const Signup=()=>{
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const dispatch = useDispatch();




    return (
        <div>
            <h1 style={{textAlign:'center'}}>Signup</h1>

            <label>Username</label> <br/>
            <input type="text"  onChange={(event)=>setEmail(event.target.value)}/><br/>
            
            <label>Password</label> <br/>
            <input type='text'  onChange={(event)=>setPassword(event.target.value)}></input> <br/>
            
             <button onClick={()=> dispatch(signUp(email, password))}>Submit</button>
           <p> already registered? <Link to='/'>login</Link></p>


        </div>
    )
}

export default Signup