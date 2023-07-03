const DisplayTransaction=(props)=>{


    return(<div>

       <h4>History of your transaction</h4>

       {props.transactions.map((data)=>(

        <div >
            <h5>{data.transactionItem}</h5>
            <h5>{data.amount}</h5>
            <h5>{data.transactionType}</h5>
        </div>

        

       ))}
              
    </div>
    );

}
export default DisplayTransaction