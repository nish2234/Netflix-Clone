import React, { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import Boxy from "./component/Boxy";
import Textarea from "./component/Textarea";

import netf from "./netf.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import Accordion from "./component/Accordion";
import TextareaHalf from "./component/TextareaHalf";
import Footer from "./component/Footer";

function App() {
  document.body.style.backgroundColor = "#2c2b2b";
  const [lang, setlang] = useState("English");
  const handlelang = ()=>{
    if(lang == "English"){
      setlang("Hindi");
    }else{
      setlang("English")
    }
  }
  return (
    <>
      <div className="cont1">
        <div className="cont1p">
        <div className="cont2">
          <img src={netf} alt="" />
        </div>
        <div className="cont2p">
          <button type="button" class="btn1 mx-3 " >
            {" "}
            <a
              class="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {lang}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/" onClick={handlelang}>English</a></li>
            <li><a class="dropdown-item" href="/" onClick={handlelang}>Hindi</a></li>
            
          </ul>
          
          </button>
          <button type="button" class="btn btn-danger mx-3">
            Sign in
          </button>
        </div>
        </div>
        <div className="cont3 container">
          <Textarea/>
        </div>
    </div>
    <div className="check1">
    <div className="cont4 ">
          <Box imgS = {img1} t1 = "Enjoy on your TV." t2 = "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."/>
    </div>

    </div>
    <div className="check1">
    <div className="cont4">
      <Boxy imgT = {img2} t1 = "Download your shows to watch offline."  t2 = "Save your favourites easily and always have something to watch." />
    </div>

    </div>
    <div className="check1">
    <div className="cont4">
    <Box imgS = {img3} t1 = "Watch everywhere." t2 = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."/>
    </div>
      
    </div>
    <div className="check1">
      
    <div className="cont4">
      <Boxy imgT = {img4} t1 = "Create profiles for children."  t2 = "Send children on adventures with their favourite characters in a space made just for them—free with your membership." />
    </div>
      
    </div>
    <div className="check2">
      <div className="container ch2">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="container ch3">
        <Accordion/>
      </div>
      <div className="ch4">
      <TextareaHalf/>
    </div>

    </div>
    <div className=" ch">
    <div className="check3 container">
      <Footer/>

    </div>

    </div>
    
   
   
   
   
     
    </>
  );
}

export default App;
