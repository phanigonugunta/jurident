import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Mypages/Home"
import News from "./Mypages/MyNews"
import {articles} from "../src/components/data"


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/news" element = {<News/>}/>
          {articles.map((article) => {
                        const { id, title, description, author } = article;
                        return (
                            <Route
                                path={id}
                                element={
                                    <News
                                        author={author}
                                        title={title}
                                        description={description}
                                    />
                                }
                            />
                        );
                    })}


        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
