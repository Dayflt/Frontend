import './css/Page.css';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import RecordVideo from './Cam';

const Record = ({ match }) => {
  const {num} = match.params;
  const [blob, getb] = useState(new Blob());

const log = () => { // 로그 확인 용
    console.log(blob);
  };

const Data = () => {
    const formData = new FormData();
    console.log('이하');
    //console.log(blob);
    formData.append('file', blob);
    console.log(num);
    formData.append('image_no',num);
   // console.log(formData.get('file'));
    console.log(formData.get('image_no'));
    console.log('이상');
  }

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>영상 녹화 페이지 입니다!</h1>
      <RecordVideo  setbb = {getb} />
      <button onClick={log}>상위log </button> 
        <Link to="../Selection">
        <button className="RunButton">BACK</button>
      </Link>


      <Link to={`../Preview/${num}`}> 
        <button onClick={Data} className="RunButton">NEXT</button>
      </Link>
      </header>
    </div>
  );
};

export default Record;