const DisplayTransaction=(props)=>{


    return(<div>

       <h4>History of your transaction</h4>

      
       {props.transactions.map((data)=>(
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