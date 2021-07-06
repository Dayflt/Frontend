import './css/Page.css';
import React from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';
//import plus from './img/plus.png';

const Selection =() => {
    return (
      <div className="Page">
        <header className="Page-header">
          <h1>
           <img src={star} className="Star-logo" alt="logo"></img>
               Synthesize Images
          </h1>
          <h3>
            바뀌고 싶은 얼굴을 선택하세요!
          </h3>
            <div className='ImageBox'>
              <div>  
                <button className='SelectButton'> 1</button>
                <button className='SelectButton'> 2</button>
                <button className='SelectButton'> 3</button>
                <button className='SelectButton'> 4</button>
              </div>
                <div className='InputBox'>
                  여기에 선택에 따른 이미지가 들어감
                </div>
            </div>
            <div>
          <Link to ="./">
           <button className="RunButton">
              BACK
           </button>
          </Link>
          <Link to ="./Record">
           <button className="RunButton">
              NEXT
           </button>
          </Link>
          </div>
        </header>
      </div>
    );
}
export default Selection;