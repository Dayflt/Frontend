import './css/Share.css';
import React from 'react';
import ReactPlayer from 'react-player';
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
                <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvid.mp4'
                className="result"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
                </ReactPlayer>
              </div>
            <div className="share_box">
              
            </div>
            <div className="button_box">
              <form>
                <input type="text" className="nickname" name="/api/model/gallery/{model_id}"></input>
                <div className="emoticon_box">
                  <div className="emoticon">
                    🤣😚🙃😱
                  </div>
                </div>
                <Link to ="./Gallery">
                  <button className="galleryButton" onClick="">
                    Share it!
                  </button>
                </Link>
              </form>
            </div>
          </header>
        </div>
      );
};

export default Share;