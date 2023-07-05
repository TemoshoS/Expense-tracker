
import AddTransaction from "./add"
import DisplayTransaction from "./displayTransaction"
import { getAuth, signOut } from "firebase/auth"
import { auth } from '../config/firebase'
import { useNavigate } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch } from "react-redux"
import { signingOut } from "../authReducer/auth"


const Home = (props) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const logOut = (() => {

        const isLoggedOut = dispatch(signingOut());

        if (isLoggedOut) {
            navigate('/')

        } else {

        }


    })


    return (

        <div>

            <i onClick={logOut} className="bi bi-box-arrow-in-right" style={{ float: "right", fontSize: "40px" }}></i>

            <div className="App">

                <DisplayTransaction transactions={props.transactions} />
                <AddTransaction add={props.add} />
            </div>
        </div>
    )

}

export default Home