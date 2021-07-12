import React, { useEffect } from 'react';
import { useRecordWebcam } from 'react-record-webcam';
//import Axios from 'axios';
import './css/Page.css';
import {storage} from "../App";

function RecordVideo({setbb, setburl}) {
  const OPTIONS = { recordingLength: 5, fileType: 'mp4' } // 녹화 제한 시간, 확장자
  const recordWebcam = useRecordWebcam(OPTIONS);

  const log = () => { // 로그 확인 용
    //const blob = recordWebcam.getRecording(); // blob 받아옴 쓸모가 있나?
    //const blob = recordWebcam.blob; console.log(recordWebcam.newblob);
    console.log(recordWebcam.blob);
    console.log(recordWebcam.previewRef.current.src);
  };

  useEffect(() => {
    recordWebcam.open();
    //return () => setLoading(false); // cleanup function을 이용
  },[])


  
  const setblob = () => {

    setbb(recordWebcam.blob);
    setburl(recordWebcam.previewRef.current.src);
  }

  return (
    <div className='ImageBox' style={{ display: 'block'}}>
      <div style={{ display: 'block' }}>
        <p>Camera status: {recordWebcam.status}</p>
        <video ref={recordWebcam.webcamRef} autoPlay muted />
      </div>
      <div>
        <button onClick={recordWebcam.start}>Start recording</button>
        <button onClick={recordWebcam.stop}>Stop recording</button>
        <button onClick={recordWebcam.retake}>Retake recording</button>
        <button onClick={recordWebcam.download}>Download recording</button>
        <button onClick={recordWebcam.close}>Close camera</button>
        <button onClick={setblob}>확정</button>
        <button onClick={log}>하위 log </button>
      </div>
      <video ref={recordWebcam.previewRef} autoPlay muted loop />
      {/* <p>Camera status: {recordWebcam.status}</p> */}
    </div>
  )

}

export default RecordVideo;