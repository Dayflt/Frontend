// eslint-disable-next-line
import './css/Gallery.css';
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import axios from 'axios'

const Gallery = () => {
  const [galleryVideo1, setGalleryVideo1] = useState([]);
  const [galleryVideo2, setGalleryVideo2] = useState([]);
  const [galleryVideo3, setGalleryVideo3] = useState([]);
  const [galleryVideo4, setGalleryVideo4] = useState([]);
  const [galleryName1, setGalleryName1] = useState([]);
  const [galleryName2, setGalleryName2] = useState([]);
  const [galleryName3, setGalleryName3] = useState([]);
  const [galleryName4, setGalleryName4] = useState([]);

  useEffect(
    async function() {
      try {
        for(var i = 1; i <=4; i++ ) {
          const response = await axios.get('http://localhost:5000/api/model/gallery/'+ i);
          console.log(response);
          const cur = response.data;
          console.log(cur.length);
            for(var j = 1; j < cur.length; j++){
              let video = response[j].data.model_result;
              let name = response.data.model_name;
              setGalleryVideo1(video);
              setGalleryName1(name);
            }
          /*if(i == 1){
            setGalleryVideo1(video);
            setGalleryName1(name);
          }
          else if(i == 2){
            setGalleryVideo2(video);
            setGalleryName2(name);
          }
          else if(i == 3){
            setGalleryVideo3(video);
            setGalleryName3(name);
          }
          else{
            setGalleryVideo4(video);
            setGalleryName4(name);
          }
          console.log(video);
          console.log(name);
          console.log(response)*/
        }
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
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo1[0]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName1[0]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo1[1]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName1[1]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo1[2]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName1[2]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo1[3]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName1[3]}</h6>
            </div>
          </div>
          <div className="gallery_box">
          <h5>이모티콘[1]</h5>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo2[0]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName2[0]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo2[1]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName2[1]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo2[2]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName2[2]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo2[3]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName2[3]}</h6>
            </div>
          </div>
          <div className="gallery_box">
            <h5>이모티콘[2]</h5>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo3[0]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName3[0]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo3[1]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName3[1]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo3[2]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName3[2]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo4[3]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName4[3]}</h6>
            </div>
          </div>
          <div className="gallery_box">
          <h5>이모티콘[3]</h5>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo4[0]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName4[0]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo4[1]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName4[1]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo4[2]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName4[2]}</h6>
            </div>
            <div className="gallery_no">
              <ReactPlayer 
                url={galleryVideo4[3]}
                className="gallery_video"
                loop="true"
                playing="true"
                muted="true"
                width="70%"
                height="70%">
              </ReactPlayer>
              <h6>{galleryName4[3]}</h6>
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