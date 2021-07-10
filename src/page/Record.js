import './css/Page.css';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import RecordVideo from './Cam';

const Record = ({ match }) => {
  const {num} = match.params;
  const [form, getb] = useState(new FormData());

const log = () => { // 로그 확인 용
    //console.log(blob);
  };

const Data = () => {
  //const formData = new FormData();
    console.log('이하');
    //console.log(blob);
    form.append('file', form);
    console.log(num);
    form.append('image_no',num);
   // console.log(formData.get('file'));
    console.log(form.get('image_no'));
    console.log('이상');
  }

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>영상 녹화 페이지 입니다!</h1>
      <RecordVideo  setbb = {form} />
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