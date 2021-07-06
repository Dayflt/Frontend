import './css/Page.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecordWebcam } from 'react-record-webcam'

const Record = () => {
  return (
    <div className="Page">
      <header className="Page-header">
        <h1>영상 녹화 페이지 입니다!</h1>
      </header>
      <Link to ="./Selection">
           <button className="RunButton">
              BACK
           </button>
          </Link>
          <Link to ="./Result">
           <button className="RunButton">
              NEXT
           </button>
          </Link>
    </div>
  );
};

export default Record;