
import AddTransaction from "./add"
import DisplayTransaction from "./displayTransaction"

const Home =(props)=>{


    return (

        <div>

            <DisplayTransaction transactions={props.transactions}/>
            <AddTransaction  add={props.add}/>

        </div>
    )

}

export default Home