import "./css/Page.css";
import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useRecordWebcam } from "react-record-webcam";
import { Setb, Setburl} from "../App";


const Record = ({ match }) => {
  const { num } = match.params;
  const OPTIONS = { recordingLength: 5, fileType: "mp4" }; // 녹화 제한 시간, 확장자
  const recordWebcam = useRecordWebcam(OPTIONS);

  const setburl = useContext(Setburl);
  const Setblob = useContext(Setb);

  const [re_state, set_state] = useState(false);

  useEffect(() => {
    recordWebcam.open();
  }, []);

  const Set = () => {
    recordWebcam.getRecording().then((respone) => Setblob(respone));
    setburl(recordWebcam.previewRef.current.currentSrc);
  };

  const log = () => { // 로그 확인 용
    set_state(true);
  };

  const stop = () => {
    recordWebcam.stop()
  }

  const retake = () => {
    recordWebcam.retake();
    set_state(false);
  }
  return (
    <div className="Page">
      <header className="Page-header">
        <h1>영상 녹화 페이지 입니다!</h1>
        <div className="ImageBox" style={{ display: "block" }}>
          <div style={{ display: "block" }}>
            <p>Camera status: {recordWebcam.status}</p>
            { re_state ? 
            (<div> <video src={recordWebcam.previewRef.current.src} autoPlay muted loop/> {console.log(recordWebcam.previewRef)}</div>):
            (<div><video ref={recordWebcam.webcamRef} autoPlay muted />{console.log('현재'+re_state)}</div>)}
          </div>
          <div>
            <button onClick={recordWebcam.start}>Start recording</button>
            <button onClick={stop}>Stop recording</button>
            <button onClick={retake}>Retake</button>
            <button onClick={log}>하위 log </button>
            <button onClick={Set}>set </button>
          </div>
        </div>

        <Link to="../Selection">
          <button className="RunButton">BACK</button>
        </Link>
        <Link to={`../Preview/${num}`}>
          <button className="RunButton" onClick={Set}>NEXT</button>
        </Link>
      </header>
    </div>
  );
};

export default Record;
