import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../firestoreReducers/data";

const TotalBalance = () => {

    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.data);


    useEffect(() => {

        dispatch(fetchData());

    }, [])



const totalExpense = data.reduce((accumulator, currentValue)=>{

    if(currentValue.transactionType =="Expense"){

        return accumulator + parseInt(currentValue.amount)

    }
    return accumulator

},0)


const totalIncome = data.reduce((accumulator, currentValue)=>{

    if(currentValue.transactionType =="Income"){

        return accumulator + parseInt(currentValue.amount)

    }
    return accumulator

},0)

console.log(totalExpense)

    return (
        <div className='mt-3'>
            <h3>Total Balance</h3>
            <h4>R {totalIncome - totalExpense}</h4>
            <div className='totalBalance'>
                <div>
                    <h4>Income</h4>
                    <h6 style={{color:'green'}}>R {totalIncome}</h6>

                </div>


                <div className='totalBalanceLine'></div>
                <div>
                    <h4>Expense</h4>
                    <h6 style={{color:'red'}}>R {totalExpense}</h6>

                </div>


            </div>

        </div>
    )
}

export default TotalBalance