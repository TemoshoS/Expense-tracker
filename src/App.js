import AddTransaction from './Components/add';
import './App.css';
import React, { useState } from 'react'
import DisplayTransaction from './Components/displayTransaction';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {

const [transactions, setTransactions] = useState([]);

const add =(transactionItem, amount, transactionType)=>{
  
      setTransactions((transactions)=>[...transactions,{transactionItem:transactionItem,amount:amount,transactionType:transactionType}]);  

console.log(transactions);
    };

  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/home' element={<Home add={add} transactions={transactions}/>} />

      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
