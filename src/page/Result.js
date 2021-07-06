import './css/Result.css';
import React from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import axios from 'axios'

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
            <button className="RetryButton"> 
              TRY AGAIN
            </button>
        </div>
      </header>
    </div>
  );
}
export default Result;