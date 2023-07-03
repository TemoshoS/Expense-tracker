import { useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore'
import { async } from '@firebase/util'


const AddTransaction = (props) => {

   const [transactionItem, setTransactionItem] = useState('');
   const [amount, setAmount] = useState('');
   const [transactionType, setTransactionType] = useState('');

   const add = (async () => {
      // props.add(transactionItem,amount,transactionType);



      try {
         const docRef = await addDoc(collection(db, "transactions"), {
            transactionItem: transactionItem,
            amount: amount,
            transactionType: transactionType
         })


            alert("added successfully")
      } catch {

      }
   })

   return (<div>

      <h1>Add a new transaction </h1>

      <input type='text' placeholder='Enter amount' onChange={(event) => setTransactionItem(event.target.value)}></input> <br />
      <input type='text' placeholder='Enter amount' onChange={(event) => setAmount(event.target.value)}></input> <br />

      <select onChange={(event) => setTransactionType(event.target.value)}>
         <option>Income</option>
         <option>Expense</option>
      </select> <br />

      <button onClick={add}>Add a transaction</button>

   </div>
   );
}

export default AddTransaction

