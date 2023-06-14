// import React from 'react'
import React, { Component } from "react";
import { user } from "react-icons/fa";
import MyHeader from "../components/MyHeader";
import NavBar from "../components/NavBar";
import MyImg from "../components/MyImg";
import MyTitle from "../components/MyTitle";
import MyContent from "../components/MyContent";
import MyFooter from "../components/MyFooter";

export default function MyNews(props) {
<<<<<<< HEAD
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
=======
    return (
        <div>
            <MyHeader></MyHeader>
            <NavBar></NavBar>
            <MyImg src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></MyImg>
            <MyTitle element={props.title}></MyTitle>
            <MyContent element={props.description}></MyContent>
            <MyFooter></MyFooter>
        </div>
    );
>>>>>>> 3fbbf2a90bbbb0129615e077c018daaa2391787c
}
