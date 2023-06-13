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
    <MyImg src = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></MyImg>
    <MyTitle element = {props.title}></MyTitle>
    <MyContent element={props.content}></MyContent>
    <MyFooter></MyFooter>
    </div>
  )
}

