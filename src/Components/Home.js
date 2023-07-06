import TotalBalance from "./totalBalance"
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

            <div className="Container">
            <div className="mt-5">
      <ul className="nav nav-tabs">

        <li className="nav-item" role="presentation">
          <button className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Expense tracker
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button className="nav-link"
            id="income-tab"
            data-bs-toggle="tab"
            data-bs-target="#income"
            type="button"
            role="tab"
            aria-controls="income"
            aria-selected="false"
          >
            Currency Converter
          </button>
        </li>

      </ul>
    </div>

                <TotalBalance/>
                <DisplayTransaction transactions={props.transactions} />
                <AddTransaction add={props.add} />
            </div>
        </div>
    )

}

export default Home