import React, { Component } from 'react';
import MyHead from "../components/MyHeader"
import Nav from "../components/NavBar"
import Search from "../components/MySearch"
import Imag from "../components/MyImg"
import MyHd from "../components/MyHeading"
import Card from "../components/MyCards"
import FAQ from "../components/MyFAQ"

export default function MyHome() {
  return (
    <>
    <MyHead></MyHead>
    <Nav></Nav>
    <Search></Search>
    <Imag src = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></Imag>
    <MyHd></MyHd>
    <Card src = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></Card>
    <FAQ></FAQ>
    
    </>
  )
}

