import React, { useState } from 'react'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import './App.css';
import Feed from './Feed/Feed';


function App() {

 


  return (
    <div className="app">
    
     
      {/*Header */}
      <Header/>
 
  {/*App body */}
  <div className="app_body">
   {/*Sidebar */}
    <Sidebar/>
    {/*feed */}
    <Feed/>

     {/*widgets */}
     </div>
    </div>
  )
}

export default App
