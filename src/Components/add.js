import { useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore'
import { async } from '@firebase/util'
import { addTranscation } from '../firestoreReducers/data';
import { useDispatch } from 'react-redux';

const AddTransaction = (props) => {

   const [transactionItem, setTransactionItem] = useState('');
   const [amount, setAmount] = useState('');
   const [transactionType, setTransactionType] = useState('');

   const dispatch = useDispatch();

   const add = (async () => {

      dispatch(addTranscation({
       transactionItem:transactionItem,
       amount:amount,
       transactionType:transactionType     
      }))
      
   })

   return (<div>

      <h5 style={{paddingTop:"25px"}}>Add a new transaction </h5>

      <input type='text' placeholder='Enter item' onChange={(event) => setTransactionItem(event.target.value)}></input> <br />
      <input type='text' placeholder='Enter amount' onChange={(event) => setAmount(event.target.value)}></input> <br />

      <select onChange={(event) => setTransactionType(event.target.value)}>
         <option>Income</option>
         <option>Expense</option>
      </select> <br />

      <button onClick={add} className='addBtn'>Add a transaction</button>

   </div>
   );
}

export default AddTransaction

