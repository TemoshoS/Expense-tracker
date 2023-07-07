import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../firestoreReducers/data";
import { deleteTransaction } from "../firestoreReducers/data";

const DisplayTransaction = (props) => {
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state) => state.data);


    useEffect(() => {

        dispatch(fetchData());

    }, [])


    return (
        <div style={{ marginTop: "35px" }}>

            <h4>History of your transaction</h4>


            {data.map((data) => (
                <div style={{ display: "flex" }}>
                    <div className="list-Item">
                        <div >
                            <h5>{data.transactionItem}</h5>
                        </div>
                        <div>
                            <h5>{data.amount}</h5>
                        </div>
                        <div>
                            {data.transactionType === "Expense" ? <div className="expenseIndicator"></div> : <div className="incomeIndicator"></div>}

                        </div>
                    </div>

                    <div style={{ marginLeft: '10%' }}>



                        <div onClick={() => dispatch(deleteTransaction(data.id))}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg>

                        </div>

                        <div data-toggle="modal" data-target="#exampleModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>

                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Update</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">

                                        <input  type='text' placeholder="enter item" style={{width:"480px"}}/>
                                        <input  type='text' placeholder="enter amount" style={{width:"480px"}}/>
                                        <select style={{width:"480px"}}>
                                            <option>Income</option>
                                            <option>Expense</option>

                                        </select>

                                    </div>
                                    <div class="modal-footer">
                                
                                        <button type="button" className="addBtn">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>


                </div>
            ))}
            <div></div>


        </div>
    );

}
export default DisplayTransaction