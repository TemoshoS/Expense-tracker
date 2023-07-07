import TotalBalance from "./totalBalance"
import AddTransaction from "./add"
import DisplayTransaction from "./displayTransaction"
import { getAuth, signOut } from "firebase/auth"
import { auth } from '../config/firebase'
import { useNavigate } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch } from "react-redux"
import { signingOut } from "../authReducer/auth"
import { Link } from "react-router-dom"


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
              <Link
                to="/home"
                className="nav-link active"
                id="home-tab"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Expense tracker
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                to="/currencyconverter"
                className="nav-link"
                id="CurrencyConvert-tab"
                role="tab"
                aria-controls="CurrencyConvert"
                aria-selected="false"
              >
                Currency Converter
              </Link>
            </li>

          </ul>
        </div>

        <TotalBalance />
        <DisplayTransaction transactions={props.transactions} />
        <AddTransaction add={props.add} />
      </div>
    </div>
  )

}

export default Home