import React, { useState, useRef, useEffect } from 'react';
import RecordRTC, { invokeSaveAsDialog } from 'recordrtc';
import './css/Page.css';

function RecordVideo() {
  const [stream, setStream] = useState(null);
  const [blob, setBlob] = useState(null);
  const refVideo = useRef(null);
  const recorderRef = useRef(null);

  const handleRecording = async () => {
    const cameraStream = await navigator.mediaDevices.getUserMedia({ 
      video: {
        width: 1920,
        height: 1080,
        frameRate: 30,
      },
      audio: false,
    });

    setStream(cameraStream);
    recorderRef.current = new RecordRTC(cameraStream, { type: 'video/mp4', previewStream: function(stream) {},
  });
    recorderRef.current.startRecording();
  };

  const handleStop = () => {
    recorderRef.current.stopRecording(() => {
      setBlob(recorderRef.current.getBlob());
    });
  };

  const handleSave = () => {
    invokeSaveAsDialog(blob);
  };

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }

    refVideo.current.srcObject = stream;
  }, [stream, refVideo]);

  return (
    <div>
      <div className="InputBox" style={{width:700, margin: '1em'}}>두둥!
      {blob && (
          <video
            src={URL.createObjectURL(blob)}
            controls
            autoPlay
            ref={refVideo}
            style={{ width: '700px', margin: '1em', alignitems: 'center', textalign: 'center'}}
          />
        )}</div>
      <header style={{backgroundColor: 'white', display: 'block'}}>
        <button className="RecordButton" onClick={handleRecording}>record</button>
        <button className="RecordButton" onClick={handleStop} style={{backgroundColor: "red"}}>Stop</button>
        <button className="RecordButton" onClick={handleSave}>retry</button>
      </header>
    </div>
  );
}

export default RecordVideo;