// eslint-disable-next-line
import './css/Result.css';
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import axios from 'axios'
import Modal from './components/Modal';
import fileDownload from 'js-file-download';

const Result =(props) => {//앞에서 넘겨온 id참조, 프록시 5000으로  "proxy": "http://localhost:5000"
  const { model_id } = props;
  const [modalOpen, setModalOpen ] = useState(false);
  const [resultVideo, setResultVideo ] = useState("");
  
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  const deleteModel = () =>{
    axios.delete('http://localhost:5000/api/model/${model_id}')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }
  useEffect(
    async function() {
      try {
        const response = await axios.get('http://localhost:5000/api/model/${model_id}');
        var url = response.data.model_result;
        setResultVideo(url);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  )
  //var resultVideo ='https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4'

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <div className="result_box">
          <ReactPlayer 
            url={resultVideo}
            className="result"
            loop="true"
            playing="true"
            muted="true"
            width="60%"
            height="60%">
          </ReactPlayer>
        </div>
        <div className="button_box1">
          <a href={resultVideo} download>
            <button className="SaveButton" onClick="">
              Save Video
            </button>
          </a>              
          <React.Fragment>
            <button className="ShareButton" onClick={ openModal }>
              Share
            </button>
            <Modal open={ modalOpen } close={ closeModal } model_id={model_id}>
            </Modal>
          </React.Fragment>
        </div>
        <div className="button_box2">
          <Link to ="../">  
            <button className="RetryButton" onClick={deleteModel}> 
              TRY AGAIN
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Result;

/*
  const VideoDownload = (response, filename) =>{
    fileDownload({resultVideo} ,'test.mp4')
  }
  <button onClick={VideoDownload}>Download Image</button>
  //preview의 id로 호출 
  /*useEffect (() => {
    fetch('/api/model/${model_id}').then (response
      => response.json().then(data =>{
        console.log.apply(data)
      }))
  },[])
  */

  //const [videourl, setVideoUrl] = useState("");
  //function 
  /*function handleDownload (url, filename){
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }
  
  router.get('주소', (req, res, next) => {
    res.sendFile('파일경로');
  }); 

  const VideoDownload = (response, filename) =>{
    axios.get(url,{
    responseType: 'blob',
  })
    .then((response)=>{
      fileDownload(response,filename)
    })
    const resut_video={response}
  }*/

  //get으로 url받아서 다운로드 할때
  /*
  const VideoDownload = (response, filename) =>{
      fileDownload('https://storage.googleapis.com/dayfly-bucket/testvidmixed.mp4' ,'test')
    }
    let result_video ={response}
    url={result_video}
  */
