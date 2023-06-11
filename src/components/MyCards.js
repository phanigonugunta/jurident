import React, { Component } from 'react';
import Carrd from "../components/MyCard"

function MyCards(props) {
  return (
    <div>
        <div class = "grid grid-cols-2 gap-4 flex justify-around place-content-evenly">
            <div>
                <Carrd></Carrd>
            </div>
            <div>
                <Carrd></Carrd>
            </div>
            <div>
                <Carrd></Carrd>
            </div>
            <div>
                <Carrd></Carrd>
            </div>
            <div>
                <Carrd></Carrd>
            </div>
            <div>
                <Carrd></Carrd>
            </div>
        </div>
    </div>
  )
}

export default MyCards