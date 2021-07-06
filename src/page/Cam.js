import React, { Component, Fragment } from 'react'
import { RecordWebcam } from 'react-record-webcam'

function RecordVideo(props) {
    return (
      <RecordWebcam
        render={() => {
          return (
            <div>
              <h1>Component render prop demo</h1>
              <p>Camera status: {props.status}</p>
              <div>
                <button onClick={props.openCamera}>Open camera</button>
                <button onClick={props.retake}>Retake</button>
                <button onClick={props.start}>Start recording</button>
                <button onClick={props.stop}>Stop recording</button>
                <button onClick={props.download}>Download</button>
              </div>
            </div>
          );
        }}
      />
    )
  }

  export default RecordVideo;