import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Mypages/Home"
import News from "./Mypages/MyNews"


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/news" element = {<News/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
