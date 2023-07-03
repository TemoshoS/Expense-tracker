
import AddTransaction from "./add"
import DisplayTransaction from "./displayTransaction"
import { getAuth, signOut } from "firebase/auth"
import {auth} from '../config/firebase'
import { useNavigate } from "react-router-dom"

const Home =(props)=>{


    const navigate = useNavigate()
    const logOut =(()=>{
        signOut(auth).then(()=>{

            navigate("/")
        }).catch((error)=>{

        })

    })


    return (

        <div>

<i onClick={logOut} className="fa fa-sign-out" style={{float:"right",fontSize:"40px"}}>logout</i>

            <div className="App">
            
            <DisplayTransaction transactions={props.transactions}/>
            <AddTransaction  add={props.add}/>
            </div>
        </div>
    )

}

export default Home