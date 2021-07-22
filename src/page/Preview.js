import "./css/Page.css";
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import one from "./img/1.png";
import two from "./img/2.png";
import thr from "./img/3.png";
import four from "./img/4.png";
import plus from "./img/plus.png";
import star from "./img/star110.png";
import api from '../api.jsx';
import { Bdata, Burl } from "../App";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";
import './css/Home2.css';

const Preview = ({ match }) => {
  const { num } = match.params;
  const data = useContext(Bdata);
  const burl = useContext(Burl);
  const history = useHistory();

  const [loadings, set_load] = useState(false);
  const [result, set_result] = useState(false);
  let [pic] = useState([one, two, thr, four]); 
  let model;

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #ffffff;
  `;

  const send = async() => {
    const formData = new FormData();
    const file = new File([data], 'test.mp4', { type: 'video/mp4'})
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", file);
    formData.append("image_no", parseInt(num)+1);
    
    
    set_load(true); // 로딩 시작 재랜더링
    await api.post("/api/model", formData, config)
    .then((response) => {
      set_load(false);
      set_result(true); // respone을 받으면 재랜더링
      if (response.data.success) {
        model = response.data.model_id;
        history.push({
          pathname: "/Result",
          state: {model_id: model}
        });
      } else {
        console.log(response.data.message);
        set_load(false);
        alert("업로드 실패");
      } 
    });
  };

  return (
    <div class="masthead">
      <div class="container p-3 mb-2 bg-white text-dark">
        <h1>
          <img src={star} className="Star-logo" alt="logo"></img>
          Synthesize Images
        </h1>
        <div className="ImageBox" style={{ margin: "3%" }}>
          {!loadings && !result ? (
            <div>
              <h3>선택한 것들!</h3>
              <div className="ImageBox">
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
            </div>
          ) : result ? (
            console.log('../Result/' + model)
          ) : (
            <div>
              <h3>waiting...</h3>
              <PacmanLoader
                css={override}
                size={50}
                color={"#f2ddcc"}
                loading={loadings}
              />
            </div>
          )}
        </div>
        <div>
          <Link to={`../Record/${num}`}>
          <button type="button" class="btn btn-primary m-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
              </svg>
              BACK
            </button>
          </Link>
          <button type="button" class="btn btn-primary m-3" onClick={send}>
              NEXT
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>
            </button>
        </div>
      </div>
    </div>
  );
};
export default Preview;