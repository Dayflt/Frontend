import './css/Page.css';
import React from "react";
import { Link } from "react-router-dom";
import RecordVideo from './Cam';
//import { useRecordWebcam } from 'react-record-webcam'
//import RecordRTC from 'recordrtc';

const Record = () => {

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>영상 녹화 페이지 입니다!</h1>
        <div className='InputBox'> 
         두둥!
        </div>
        {Record}
      </header>
      
      <RecordVideo/>
      
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
          <div>
      </div>
    </div>
  );
};

export default Record;