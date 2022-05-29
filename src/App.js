import Home from './pages/Home';
import React  from 'react'
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Order from './pages/Order';
import { Route, Routes } from 'react-router-dom';

function App() {

  return <Home />;

  // return (
  //   <Routes>
  //   <Route path='/' element={<Home/>}/>
  //   <Route path='/login' element={<Login/>}/>
  //   <Route path='/register' element={<Register/>}/>
  //   <Route path='/order' element={<Order/>}/>
  //   </Routes>
  // );

}

export default App;
