import './css/Page.css';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import RecordVideo from './Cam';

const formData = new FormData();

const Record = ({ match }) => {
  const {num} = match.params; 
  const [blob, getb] = useState(new Blob());
  const [burl, getburl] = useState('');

  const log = () => {
    console.log(blob);
    console.log(burl);
    Data();
  };

  const Data = () => {
    console.log('이하');
    //console.log(blob);
    formData.append('file', blob);
    //console.log(num);
    formData.append('image_no',num);
    formData.append('burl', burl);
    //console.log(formData.get('file'));
    //console.log(formData.get('image_no'));
    console.log('이상');
  }


  return (
    <div className="Page">
      <header className="Page-header">
        <h1>영상 녹화 페이지 입니다!</h1>

        <RecordVideo  setbb = {getb} setburl = {getburl}/>

      {console.log(num)}
        <Link to="../Selection">
        <button className="RunButton">BACK</button>
      </Link>
      <button className="RunButton" onClick={log}>log</button>
      <Link to={`../Preview/${formData}`}> 
        <button className="RunButton">NEXT</button>
      </Link>
      </header>
    </div>
  );
};

export default Record;