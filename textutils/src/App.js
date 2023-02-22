
// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React,{useState} from 'react'

// import { createRoot } from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
// import{ BrowserRouter,
//   Routes,
//   Route,
//   Link }
//   from "react-router-dom";



function App() {
  const[Mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

    
  }

  const togglemode=()=>{
    if(Mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode enabled","success");
      document.title='TextUtils-DarkMode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success");
      document.title='TextUtils-LightMode'
    }
  }
  return (
    < >
    {/* <BrowserRouter> */}
      <Navbar title='TextUtils' Mode={Mode} togglemode={togglemode}/>
      {/* <About/> */}
      <Alert alert={alert}/>
      <div className="container">
          {/* <Routes>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  Mode={Mode} showAlert={showAlert} />}/>
            <Route path="/about" element={<About />}/>
          </Routes> */}
          <TextForm heading="Enter text to analyze"  Mode={Mode} showAlert={showAlert} />
        </div>
      {/* </BrowserRouter> */}
    </>
 



    
    
    

    
    
      
  );
}

export default App;
