
import React from 'react';
import './CSS/style_index.css';
import './CSS/demo.css';
import './CSS/sus.css';
import s1 from "../Components/Assets/s1.png";
import s2 from "../Components/Assets/s2.png";
import s3 from "../Components/Assets/s3.png";
import s4 from "../Components/Assets/s4.png";
import s5 from "../Components/Assets/s5.png";
import s6 from "../Components/Assets/s6.png";
import s7 from "../Components/Assets/s7.png";
import s8 from "../Components/Assets/s8.png";
import s9 from "../Components/Assets/s9.png";



const Suspage = () => {
  return (
    <div>
      <h1 className="main-head-of-color-gold">Go Green</h1>
      <center><hr /></center>
      <div className="product-img">
        <img className="product-center-img" src={s1} alt="" />
      </div>
      <br /> <br />
      <center><h2 className="trends-header">TRENDING NOW</h2></center>
      <br /><br />
      <div className="trends-categories">
        <a href="prod.html"><img src={s2} alt="" /></a>
        <a href="prod.html"><img src={s3} alt="" /></a>
        <a href="prod.html"><img src={s4} alt="" /></a>
        <a href="prod.html"><img src={s5} alt="" /></a>
        <a href="prod.html"><img src={s6} alt="" /></a>
        <a href="prod.html"><img src={s7} alt="" /></a>
 
      </div>
      <br /><br />
      <center><h2 className="trends-header">Our Green Journal</h2></center>
      <br /><br />
      <div className="for-her">
        
        <img src={s9} alt="" className="center" />
      </div>
      <br /><br />
    </div>
  );
};

export default Suspage;
