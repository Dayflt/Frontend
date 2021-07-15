// eslint-disable-next-line
import './css/Gallery.css';
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import axios from 'axios'

const Gallery = () => {
  const [user, setUser] = useState([{
    video : "",
    username : ""
  }]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/model/gallery/1')
    .then((Response)=>{
      const user = [];
      for(var i =  0; i < Response.data.length; i++){
        user.push({
          video : Response.data[i].model_result,
          username : Response.data[i].model_name
        })
      }
      setUser(user);
    })
  }, [])

  /*
  useEffect(
    async function() {
      try {
        for(var i = 1; i <=4; i++ ) {
          const response = await axios.get('http://localhost:5000/api/model/gallery/'+ i);
          galleryList.push(response.data);
          for(var j = 1; j < galleryList.length; j++){
            const galleryUser = response.data.model_result;
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  )*/
  /*for(var i = 1; i <=4; i++ ) {
          const response = axios.get('http://localhost:5000/api/model/gallery/'+ i);
          console.log(response);
          galleryList = response.data;
          console.log(galleryList.length);
            for(var j = 1; j < galleryList.length; j++){
              const galleryVideo = response.data.model_result;
            }
        }*/
/*
  function Category(category){
    
    return(
      <div className="gallery_category">
        <h5>이모티콘{category.category_no}</h5>
        <User user={user[1]}/>
        <User user={user[2]}/>
        <User user={user[3]}/>
        <User user={user[4]}/>
      </div>
    );
  }

  function User(user){
    return(
      <div className="gallery_no">
        <ReactPlayer 
          url={galleryVideo}
          className="gallery_video"
          loop="true"
          playing="true"
          muted="true"
          width="70%"
          height="70%">
        </ReactPlayer>
        <h6>{user.model_name}</h6>
      </div>
    );
  }*/

  return (
    /*<div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <div className="gallery_total">
          <Category category={category[1]} />
          <Category category={category[2]} />
          <Category category={category[3]} />
          <Category category={category[4]} />
        </div>
        <div className="button_box">
          <Link to ="../">  
            <button className="RetryButton"> 
              TRY AGAIN
            </button>
          </Link>
        </div>
      </header>
    </div>*/
    <h2>dd</h2>
  )
}

export default Gallery;









/*useEffect(
    async function() {
      try {
        for(var i = 1; i <=4; i++ ) {
          const response = await axios.get('http://localhost:5000/api/model/gallery/'+ i);
          console.log(response);
          galleryList = response.data;
          console.log(galleryList.length);
            for(var j = 1; j < galleryList.length; j++){
              const galleryVideo = response.data.model_result;
            }
        }
      } catch (error) {
        console.error(error);
      }
    }
  )*/