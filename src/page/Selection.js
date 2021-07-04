import './css/Page.css';
import React from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import plus from './img/plus.png';

const Selection =() => {
    return (
      <div className="Page">
        <header className="Page-header">
          <h1>
           <img src={star} className="Star-logo" alt="logo"></img>
               Synthesize Images
          </h1>
          <h3>
            본인 얼굴과 닮고 싶은 사람의 얼굴을 업로드 하세요!
          </h3>
            <div className="InputImage">  
                <div className='InputBox'></div>
                <img src={plus} className="Plus-logo" alt="logo" />
                <div className='InputBox'></div>
            </div>
          <Link to ="./Result">
           <button className="RunButton">
             바꾸기
           </button>
          </Link>
        </header>
      </div>
    );
}
export default Selection;