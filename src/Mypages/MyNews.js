// import React from 'react'
import React, { Component } from 'react';
import { user } from "react-icons/fa";
import MyHeader from '../components/MyHeader';
import NavBar from '../components/NavBar';
import MyImg from '../components/MyImg'
import MyTitle from '../components/MyTitle';
import MyContent from '../components/MyContent';
import MyFooter from '../components/MyFooter';


export default function MyNews(props) {
  return (
    <div>
    <MyHeader></MyHeader>
    <NavBar></NavBar>
    <MyImg src = {props.urlToImage}></MyImg>
    <MyTitle element = {props.title}></MyTitle>
    <MyContent element={props.content}></MyContent>
    <MyFooter></MyFooter>
    </div>
  )
}

