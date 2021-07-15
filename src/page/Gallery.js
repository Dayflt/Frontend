// eslint-disable-next-line
import './css/Gallery.css';
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import axios from 'axios'

const Gallery = () => {
  const [galleryVideo, setGalleryVideo] = useState([]);
  const [galleryName, setGalleryName ] = useState([]);

  useEffect(
    async function() {
      try {
        const response = await axios.get('http://localhost:5000/api/model/gallery/1');
        var video = response.data.model_result;
        var name = response.data.model_name;
        setGalleryVideo(video);
        setGalleryName(name);
        console.log(video);
        console.log(name);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  )

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <div className="gallery_total">
          <div className="gallery_box">
            <h5>이모티콘[0]</h5>
            <div className="gallery_no1">
              <ReactPlayer 
                url={galleryVideo[0]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>{galleryName[0]}</h6>
            </div>
            <div className="gallery_no2">
              <ReactPlayer 
                url={galleryVideo[1]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>{galleryName[1]}</h6>
            </div>
            <div className="gallery_no3">
              <ReactPlayer 
                url={galleryVideo[2]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>{galleryName[2]}</h6>
            </div>
            <div className="gallery_no4">
              <ReactPlayer 
                url={galleryVideo[3]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>{galleryName[3]}</h6>
            </div>
          </div>
          <div className="gallery_box">
          <h5>이모티콘[1]</h5>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
          </div>
          <div className="gallery_box">
            <h5>이모티콘[2]</h5>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
          </div>
          <div className="gallery_box">
          <h5>이모티콘[3]</h5>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="60%"
                height="60%">
              </ReactPlayer>
              <h6>000님</h6>
            </div>
          </div>
        </div>
        <div className="button_box">
          <Link to ="../">  
            <button className="RetryButton"> 
              TRY AGAIN
            </button>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Gallery;