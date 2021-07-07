import React, { useState, useRef, useEffect } from 'react';
import { useRecordWebcam } from 'react-record-webcam'
import './css/Page.css';

function RecordVideo(props) {
  const OPTIONS = { recordingLength: 5 }
  const recordWebcam = useRecordWebcam(OPTIONS);

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  };

  useEffect(() => {
    recordWebcam.open();
  },[])

  return (
    <div className='ImageBox' style={{ display: 'block'}}>
      <div style={{ display: 'block' }}>
        <video ref={recordWebcam.webcamRef} autoPlay muted />
      </div>
      <div>
        <button onClick={recordWebcam.start}>Start recording</button>
        <button onClick={recordWebcam.stop}>Stop recording</button>
        <button onClick={recordWebcam.retake}>Retake recording</button>
        <button onClick={recordWebcam.download}>Download recording</button>
      </div>
      {/* <video ref={recordWebcam.previewRef} autoPlay muted loop />  */}
      {/* <p>Camera status: {recordWebcam.status}</p> */}
    </div>
  )
}

export default RecordVideo;