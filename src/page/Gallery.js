// eslint-disable-next-line
import './css/Gallery.css';
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import axios from 'axios'

const Gallery = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try{
        setUsers(null);
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/model/gallery/'+category_id);
        setUsers(response.data);
      }catch(e){
        console.error(e);
      }
      setLoading(false);
    };
    fetchUsers();
  },[]);

  if (loading) return <div>갤러리 로딩중..</div>;
  if (!users) return null;

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
         <img src={star} className="Star-logo" alt="logo"></img>
             Synthesize Images
        </h1>
        <div className="gallery_total">
          <div className="gallery_category" >
            <h5>이모티콘[1]</h5>
            {users.map((user , user_id) => (
              <div className="gallery_no" key={user_id}>
                <ReactPlayer 
                  url={user.model_result}
                  className="gallery_video"
                  loop="true"
                  playing="true"
                  muted="true"
                  width="70%"
                  height="70%" />
                <h6>{user.model_name}</h6>
              </div>
            ))}
          </div>
          <div className="gallery_category" >
            <h5>이모티콘[2]</h5>
            {users.map((user , user_id) => (
              <div className="gallery_no" key={user_id}>
                <ReactPlayer 
                  url={user.model_result}
                  className="gallery_video"
                  loop="true"
                  playing="true"
                  muted="true"
                  width="70%"
                  height="70%" />
                <h6>{user.model_name}</h6>
              </div>
            ))}
          </div>
          <div className="gallery_category" >
            <h5>이모티콘[3]</h5>
            {users.map((user , user_id) => (
              <div className="gallery_no" key={user_id}>
                <ReactPlayer 
                  url={user.model_result}
                  className="gallery_video"
                  loop="true"
                  playing="true"
                  muted="true"
                  width="70%"
                  height="70%" />
                <h6>{user.model_name}</h6>
              </div>
            ))}
          </div>
          <div className="gallery_category" >
            <h5>이모티콘[4]</h5>
            {users.map((user , user_id) => (
              <div className="gallery_no" key={user_id}>
                <ReactPlayer 
                  url={user.model_result}
                  className="gallery_video"
                  loop="true"
                  playing="true"
                  muted="true"
                  width="70%"
                  height="70%" />
                <h6>{user.model_name}</h6>
              </div>
            ))}
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

  //const User = ;

  /*const Category = category.map(({category},i)=>(
    <div className="gallery_category" key={i}>
      <h5>이모티콘</h5>
      {User[{category}]}
    </div>
  ));*/

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