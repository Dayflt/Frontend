import "./css/Page.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import one from "./img/1.jpg";
import two from "./img/2.jpg";
import thr from "./img/3.jpg";
import four from "./img/4.jpg";
import plus from "./img/plus.png";
import star from "./img/star110.png";
import axios from "axios";
import { Bdata, Burl } from "../App";

const Preview = ({ match }) => {
  const { num } = match.params;
  const data = useContext(Bdata);
  const burl = useContext(Burl);

  let [pic] = useState([one, two, thr, four]);

  let model = 0;

  const send =  async() => {
    const formData = new FormData();
    const file = new File([data], 'test.mp4', { type: 'video/mp4'})
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", file);
    formData.append("image_no", num);
    
    console.log(formData.get('file'));
    console.log(formData.get('image_no'));

    await axios.post("/api/model", formData, config).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        model = response.data.model_id;
        // 일단 받아오기
      } else {
        alert("업로드 실패");
      } 
    });
  };

  const log = () => {
    console.log('프리뷰(전역)');
    console.log(data.type);
    console.log(data);
  };

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
          <img src={star} className="Star-logo" alt="logo"></img>
          Synthesize Images
        </h1>
        <h3>선택한 것들!</h3>
        <div className="ImageBox" style={{ margin: "3%" }}>
          <div className="InputBox">
            <img className="SelectImg" src={pic[num]} alt="select img"></img>
          </div>
          <div className="Plus-logo">
            <img className="Plus-logo" src={plus} alt="plus img"></img>
          </div>
          <div className="InputBox">
            <video src={burl} autoPlay muted loop /> 
          </div>
        </div>
        <div>
          <Link to={`../Record/${num}`}>
            <button className="RunButton">BACK</button>
          </Link>
          <button onClick={log}>하위 log </button>
          <Link to={`../result/${model}`}>
            <button onClick={send} className="RunButton">
              SUBMIT
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};
export default Preview;