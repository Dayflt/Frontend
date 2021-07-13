import "./css/Page.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import one from "./img/1.jpg";
import two from "./img/2.jpg";
import thr from "./img/3.jpg";
import four from "./img/4.jpg";
import plus from "./img/plus.png";
import star from "./img/star110.png";
import Axios from "axios";
import { Bdata } from "../App";

const Preview = ({ match }) => {
  const { num } = match.params;
  const data = useContext(Bdata);
  const burl = window.URL.createObjectURL(data);

  let [pic] = useState([one, two, thr, four]);
  let [model_id, get_id] = useState(num);

  const send = () => {
    const formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    console.log(model_id);
    formData.append("image_no", num);
    Axios.post("/api/model", formData, config).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        get_id(response.data.model_id);
        // 일단 받아오기
      } else {
        alert("업로드 실패");
      }
    });
  };

  const log = () => {
    // 로그 확인 용
    console.log(data);
    console.log(num);
    console.log(burl);
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
          <Link to="../result">
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