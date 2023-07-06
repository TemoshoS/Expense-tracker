import { useEffect } from "react";
import { useSelector,useDispatch} from "react-redux";
import { fetchData } from "../firestoreReducers/data";

const DisplayTransaction=(props)=>{
 const dispatch =useDispatch();
 const {loading, error, data}= useSelector((state)=>state.data);


 useEffect(()=>{

    dispatch(fetchData());

 }, [])


    return(
    <div style={{marginTop:"35px"}}>

       <h4>History of your transaction</h4>

      
       {data.map((data)=>(
         <div className="list-Item">
        <div >
            <h5>{data.transactionItem}</h5>
            </div>
            <div>
            <h5>{data.amount}</h5>
            </div>
            <div>
                {data.transactionType === "Expense"? <div className="expenseIndicator"></div>:<div className="incomeIndicator"></div>}
            <h5>{data.transactionType}</h5>
        </div>
      </div>
        

       ))}
       
              
    </div>
    );

}
export default DisplayTransaction