import './css/Page.css';
import React from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';

const Result =() => {
  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <h3>
          결과 페이지 입니당!
        </h3>
        <Link to ="./">
          <button className="RunButton">
            다시하기
          </button>
        </Link>
      </header>
    </div>
  );
}
export default Result;