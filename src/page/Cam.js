import React, { useState, useRef, useEffect } from 'react';
//import RecordRTC, { invokeSaveAsDialog } from 'recordrtc';
//import Webcam from "react-webcam";
import { useRecordWebcam } from 'react-record-webcam'
import './css/Page.css';

// function RecordVideo() {
//   const [stream, setStream] = useState(null);
//   const [blob, setBlob] = useState(null);
//   const refVideo = useRef(null);
//   const recorderRef = useRef(null);

//   const handleRecording = async () => { //시작 함수인데;
//     const cameraStream = await navigator.mediaDevices.getUserMedia({ 
//       video: {
//         width: 1920,
//         height: 1080,
//         frameRate: 30,
//       },
//       audio: false,
//     });

//     setStream(cameraStream);
//     recorderRef.current = new RecordRTC(cameraStream, { type: 'video/mp4', previewStream: function(stream) {},
//   });
//     recorderRef.current.startRecording();
//   };

//   const handleStop = () => { // 정지함수
//     recorderRef.current.stopRecording(() => {
//       setBlob(recorderRef.current.getBlob());
//     });
//   };


//   const handleSave = () => { // 저장함수
//     recorderRef.current.reset();
//     invokeSaveAsDialog(blob);
//   };

//   useEffect(() => { 
//     if (!refVideo.current) {
//       return;
//     }

//     refVideo.current.srcObject = stream;
//   }, [stream, refVideo]);

//   return (
//     <div>
//       <div className="InputBox" style={{width: '80%', height: '30%'}}>두둥!
//       {blob && (
//           <video
//             src={URL.createObjectURL(blob)}
//             autoPlay
//             loop
//             ref={refVideo}
//             style={{ width: '100%', alignitems: 'center', textalign: 'center'}}
//           />
//         )}</div>
//       <header style={{backgroundColor: 'white', display: 'block'}}>
//         <button className="RecordButton" onClick={handleRecording}>record</button>
//         <button className="RecordButton" onClick={handleStop} style={{backgroundColor: "red"}}>Stop</button>
//         <button className="RecordButton" onClick={handleSave}>retry</button>
//       </header>
//     </div>
//   );
// } recordrtc pack임 근데 문제가 있음;

/*const RecordVideo = () => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "record_test.mp4";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      <Webcam audio={false} ref={webcamRef} />
      {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )}
    </>
  );
}; react-webcam pack임 근데 얘도 문제가 있음;;;; */

//이하 react-record-webcam pack
function RecordVideo(props) {
  const OPTIONS = { recordingLength: 5 }
  const recordWebcam = useRecordWebcam(OPTIONS);

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  };

  return (
    <div>
      <p>Camera status: {recordWebcam.status}</p>
      <button onClick={recordWebcam.open}>Open camera</button>
      <button onClick={recordWebcam.start}>Start recording</button>
      <button onClick={recordWebcam.stop}>Stop recording</button>
      <button onClick={recordWebcam.retake}>Retake recording</button>
      <button onClick={recordWebcam.download}>Download recording</button>
      <button onClick={saveFile}>Save file to server</button>
      //<video ref={recordWebcam.webcamRef} autoPlay muted />
      <video ref={recordWebcam.previewRef} autoPlay muted loop />
    </div>
  )
}

export default RecordVideo;