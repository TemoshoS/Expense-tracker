import AddTransaction from './Components/add';
import './App.css';
import React, { useEffect, useState } from 'react'
import DisplayTransaction from './Components/displayTransaction';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';
import NoPageFound from './Components/noPageFound';
import ResetPassword from './Components/forgotPassword';
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { db } from './config/firebase';

function App() {

  const [transactions, setTransactions] = useState([]);

  const add = async (transactionItem, amount, transactionType) => {

    setTransactions((transactions) => [...transactions,
    {
      transactionItem: transactionItem,
      amount: amount,
      transactionType: transactionType
    },
    ]);

  };

  useEffect(()=>{
    getTransaction();

  })

   const getTransaction=(async()=>{

    try {
      const querySnapShot = await getDocs(collection(db, "transactions"));
      const data = querySnapShot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))

      setTransactions(data);
      console.log(data)
      
    } catch (error) {
      
    }

   })


  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/home' element={<Home add={add} transactions={transactions} />} />
          <Route path='/forgotpassword' element={<ResetPassword />} />
          <Route path='*' element={<NoPageFound />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
