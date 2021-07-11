import './css/Page.css';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import RecordVideo from './Cam';

const formData = new FormData();

const Record = ({ match }) => {
  const {num} = match.params;
  const [blob, getb] = useState(new Blob()); 
  const [bloburl, getburl] = useState(''); 

const log = () => { // 로그 확인 용
    console.log(blob);
    console.log(bloburl);
  };

const Data = () => {
    //getb( blob.type = "image/jpeg");
    formData.append('file', blob);
    formData.append('image_no',num);
    formData.append('url', bloburl);
    console.log(formData.get('url'));
    //console.log(formData.get('image_no'));
    //console.log(formData.get('url'));
  }

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>영상 녹화 페이지 입니다!</h1>

      <RecordVideo  setbb = {getb} setburl = {getburl} />

      <button onClick={log}>상위log </button> 
        <Link to="../Selection">
        <button className="RunButton">BACK</button>
      </Link>

     
      <Link to={{
        pathname : `../Preview/${num}`,
        state : {
          formData
        }}}>
        <button onClick={Data} className="RunButton">NEXT</button>
      </Link>
      </header>
    </div>
  );
};

export default Record;