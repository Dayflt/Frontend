import './css/Page.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Record = () => {

  const[playing, setPlaying] = useState(false);

  const HEIGHT=500;
  const WIDTH=500;

  const startVideo =() =>{
    setPlaying(true);
    navigator.getUserMedia(
			{
				video: true,
			},
			(stream) => {
				let video = document.getElementsByClassName('app__videoFeed')[0];
				if (video) {
					video.srcObject = stream;
				}
			},
			(err) => console.error(err)
		);
  }

  const stopVideo= () =>{
    setPlaying(false);
    let video = document.getElementsByClassName('app__videoFeed')[0];
		video.srcObject.getTracks()[0].stop();
  }

  return (
    <div className="Page">
      <header className="Page-header">
        <div className="cam">
          <video
            height={HEIGHT}
            width={WIDTH}
            muted
            autoPlay
            className="app__videoFeed"
          >
          </video>
        </div>
        <div className="record">
          {playing ? (
            <button onClick={stopVideo}>Stop</button>
          ) : (
            <button onClick={startVideo}>Start</button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Record;