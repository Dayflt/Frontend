import './css/Page.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import one from './img/1.png';
import two from './img/2.png';
import thr from './img/3.png';
import four from './img/4.png';
import './css/Home2.css';

const Selection = () => {

  let [pic,] = useState([one, two, thr, four]);
  let [num, m_num] = useState(0); //num이 현재 무엇을 선택했는지

  return (
    <div class="masthead">
      <div class="container p-3 mb-2 bg-white text-dark">
        <h1>
          <img src={star} className="Star-logo" alt="logo"></img>
          Synthesize Images
        </h1>
        <h3>
          바뀌고 싶은 얼굴을 선택하세요!
        </h3>
        <div class="container mt-5">
          <div >
            <img className='SelectImg' class="img-thumbnail" src={pic[num]} alt="select img"/>
          </div>
          <div class="m-3">
            <button type="button" class="btn btn-primary m-3" onClick={() => { m_num(0) }}> 1</button>
            <button type="button" class="btn btn-primary" onClick={() => { m_num(1) }}> 2</button>
            <button type="button" class="btn btn-primary m-3" onClick={() => { m_num(2) }}> 3</button>
            <button type="button" class="btn btn-primary" onClick={() => { m_num(3) }}> 4</button>
          </div>
        </div>
        <div>
          <Link to="./">
            <button type="button" class="btn btn-primary m-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
              </svg>
              BACK
            </button>
          </Link>
          <Link to={`./Record/${num}`}>
            <button type="button" class="btn btn-primary m-3">
              NEXT
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Selection;