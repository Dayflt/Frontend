import React, { useEffect, useContext } from 'react';
import { useRecordWebcam } from 'react-record-webcam';
//import Axios from 'axios';
import './css/Page.css';
import { Bdata, Setb } from '../App';

const RecordVideo = () => {
  const OPTIONS = { recordingLength: 5, fileType: 'mp4' } // 녹화 제한 시간, 확장자
  const recordWebcam = useRecordWebcam(OPTIONS);
  const Setblob = useContext(Setb);
  const data = useContext(Bdata);

  useEffect(() => {
    recordWebcam.open();
  },[])

  const log = () => { // 로그 확인 용
    console.log(data);
    console.log(recordWebcam.newblob);
    console.log(recordWebcam.previewRef.current.src);
  };
  
  const Set = () => {
    Setblob(recordWebcam.blob);

    //setbb(recordWebcam.blob);
    //setburl(recordWebcam.previewRef.current.src);
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
        <button onClick={Set}>확정</button>
        <button onClick={log}>하위 log </button>
      </div>
      <video ref={recordWebcam.previewRef} autoPlay muted loop />
      {/* <p>Camera status: {recordWebcam.status}</p> */}
    </div>
  )
}
export default RecordVideo;