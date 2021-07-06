import './css/Page.css';
import React from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';

const Home =() => {
  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <h3>
          PUSH NEXT to Start!
        </h3>
        <Link to ="./Selection">
          <button className="RunButton">
            NEXT
          </button>
        </Link>
      </header>
    </div>
  );
}
export default Home;