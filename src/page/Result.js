import './css/Result.css';
import React from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import axios from 'axios'


const gettest = () => {
  axios.get('https://reqres.in/api/users?page=2')
  .then(response =>{
    // handle success
    console.log(response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  .then(() => {
    // always executed
  }); }//get방식 test

const posttest=()=>{
  axios.post('https://reqres.in/api/register', {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  })
  .then(response=>{
    console.log(response);
  })
  .catch(error=>{
    console.log(error);
  });
}
const Result =() => {
  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
          <div className="result_box">
           <div className="result"></div>
          </div>
        <div className="button_box1">
          <Link to ="./">
            <button className="SaveButton">
              Save Video
            </button>
          </Link>
          <Link to ="./Share">
            <button className="ShareButton">
              Share
            </button>
          </Link>
        </div>
        <div className="button_box2">
            <button className="RetryButton" onClick={gettest}> 
              TRY AGAIN
            </button>
        </div>
        <div className="button_box2">
            <button className="RetryButton" onClick={posttest}> 
              TRY AGAIN
            </button>
        </div>
      </header>
    </div>
  );
}
export default Result;