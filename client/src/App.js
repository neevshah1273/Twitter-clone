import React from 'react';
import { Container, Switch } from '@material-ui/core';
import Home from './components/Home.js';
import LogIn from './components/LogIn/LogIn.js'
import NavBar from './components/NavBar.js';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

const App = () => {
  return(

   <BrowserRouter>
        <NavBar/>
       <Routes>
           <Route path="/"  element={<Home/>} />
           <Route path='/auth' element={<LogIn/>} />
       </Routes>
  
   </BrowserRouter>
)}


export default App;
