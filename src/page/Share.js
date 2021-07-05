import './css/Result.css';
import React from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';

const Share = () => {
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
            <div className="share_box">
              
            </div>
            <div className="button_box">
              <Link to ="./">
                <button className="GalleryButton">
                    Share it!
                </button>
              </Link>
            </div>
          </header>
        </div>
      );
};

export default Share;