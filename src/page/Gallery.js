// eslint-disable-next-line
import './css/Gallery.css';
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import axios from 'axios'

const Gallery = () => {
  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        setUsers(null);
        const response = await axios.get('http://localhost:5000/api/model/gallery/1');
        setUsers(response.data);
      }catch(e){
        console.error();
      }
    };
    fetchUsers();
  },[]);

/*      axios.get('http://localhost:5000/api/model/gallery'+ category_no )//1
      .then((Response)=>{
        for(var i =  0; i < Response.data.length; i++){
          userList.push({
            video : Response.data[i].model_result,
            username : Response.data[i].model_name
          })
        }
        console.log(userList[1].video);//success
        //setUser(user1);
      })
      //console.log(user[1].video);//not really
      //console.log(user[1].username);
  }, [])*/

  const User = users.map((user , user_id) => (
    <div className="gallery_no" key={user_id}>
      <ReactPlayer 
        url={user.video}
        className="gallery_video"
        loop="true"
        playing="true"
        muted="true"
        width="70%"
        height="70%" />
      <h6>{user.username}</h6>
    </div>
  ));

  /*const Category = category.map(({category},i)=>(
    <div className="gallery_category" key={i}>
      <h5>이모티콘</h5>
      {User[{category}]}
    </div>
  ));*/

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <div className="gallery_total">
          {User}
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