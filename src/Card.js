import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'




const date=new Date();
const fullYear=date.getFullYear();
const currentMonth=date.getMonth();
const todayDate=date.getDate();
// const headingStyle={color:"white",padding:"30px", fontSize:"4rem",background:"blue", textAlign:"center"};

function Card(props){
  const {title,desc}=props;
  return <div className="card">
  <h2 className="Title">{title} </h2>
  <h2 className="Des">{desc} </h2>    
  <p className="cardfooter">{todayDate+"/"+currentMonth+"/"+fullYear}</p>
 
  </div>
}

export default Card;