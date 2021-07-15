import "./css/Page.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import one from "./img/1.png";
import two from "./img/2.png";
import thr from "./img/3.png";
import four from "./img/4.png";
import plus from "./img/plus.png";
import star from "./img/star110.png";
import axios from "axios";
import { Bdata, Burl } from "../App";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";

const Preview = ({ match }) => {
  const { num } = match.params;

  const data = useContext(Bdata);
  const burl = useContext(Burl);

  const [loadings, set_load] = useState(false);
  const [result, set_result] = useState(false);
  let [pic] = useState([one, two, thr, four]); 

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #ffffff;
  `;

  const send =  async() => {
    let model;
    const formData = new FormData();
    const file = new File([data], 'test.mp4', { type: 'video/mp4'})
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", file);
    formData.append("image_no", num);
    

    await axios.post("/api/model", formData, config).then((response) => {
      set_load(true); // 로딩 시작 재랜더링
      if (response.data.success) {
        set_load(false);
        set_result(true); // respone 받으면 재랜더링
        console.log(response.data);
        model = response.data.model_id;
        // 일단 받아오기
      } else {
        set_load(false);
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
          {!loadings && !result ? (
            <div>
              <div className="InputBox">
                <img
                  className="SelectImg"
                  src={pic[num]}
                  alt="select img"
                ></img>
              </div>
              <div className="Plus-logo">
                <img className="Plus-logo" src={plus} alt="plus img"></img>
              </div>
              <div className="InputBox">
                <video src={burl} autoPlay muted loop />
              </div>
            </div>
          ) : result ? (
            window.location.href="../Result"
          ) : (
            <PropagateLoader
              css={override}
              size={25}
              color={"#00b5ad"}
              loading={loadings}
            />
          )}
        </div>
        <div>
          <Link to={`../Record/${num}`}>
            <button className="RunButton">BACK</button>
          </Link>
          <button onClick={log}>하위 log </button>
          <button onClick={send} className="RunButton">
            SUBMIT
          </button>
        </div>
      </header>
    </div>
  );
};
export default Preview;