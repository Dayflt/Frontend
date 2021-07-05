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
          START 버튼을 눌러서 시작하세요!
        </h3>
        <Link to ="./Selection">
          <button className="RunButton">
            START!
          </button>
        </Link>
        <Link to ="./Gallery">
          <button className="GalleryButton">
             갤러리 보러가기
          </button>
        </Link>
      </header>
    </div>
  );
}
export default Home;