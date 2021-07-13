// eslint-disable-next-line
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { store } from 'react-notifications-component';
import ReactNotification from 'react-notifications-component';
import axios from 'axios'
import "../css/modal.css";

const Modal = ( props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, video } = props;
    const [nickname, setNickname] = useState("");
    const [emoticon, setEmoticon] = useState("");

  //상위 result의 url주소 받고 + form값 묶어서 다시 전달
    const message = (message, type) => {
      store.addNotification({
        message: message,
        type: type,
        insert: "top",
        container: "center",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
        },
        dismissable: {
          Click: true
        }
      });
    }
  const clickSave = async () => {
    console.log({video});
      if(nickname===""){
          message("nickname을 작성해주세요","default")
          return false;
      }
      try{
        await axios
        .post('/api/model/{model_id}', {
        //model_id : ?,
        username : nickname,
        category_id: emoticon,
        model_id : video
        },{
          header: {
            "content-type": "application/json",
          },
        })
        .then(response=>{
          console.log(JSON.stringifly(response.data));
        });
        window.location.href="../Gallery"
      }catch(error) {
        console.log(error);
        console.log({nickname});
        console.log({emoticon});
        message("ERROR", "Please check the console for an error message.", "warning")
        setNickname("");
        setEmoticon("");
        
      }
  }
  /*function addCustomer(){
    const url ='/api/model/{model_id}';
    const formData = new FormData();
    formData.append('model_name',this.userNickname)
    formData.append('category_id',this.userEmoticon)
    formData.append('model_id',this.video)
    const config = {
      Headers:{
        'content-type':'multipart/form-data'
      }
    }
    return post(url, formData,config)
  }*/

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        닉네임과 이모티콘을 선택해주세요!
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                      <input required type="text" name="nickname" placeholder="닉네임" onChange={(e) => setNickname(e.target.value) }/>
                      <select className="emoticon" name="emoticon" onChange={(e) => setEmoticon(e.target.value)}>
                        <option value="1">🤣</option>
                        <option value="2">😚</option>
                        <option value="3">🙃</option>
                        <option value="4">😱</option>
                      </select>
                    </main>
                    <ReactNotification />
                    <footer>
                        <button className="close" onClick={clickSave}> Share it! </button>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}
export default Modal;


/*
<form onSubmit={this.handleFormSubmit}>
  <input required type="text" name="nickname" placeholder="닉네임" value={this.state.userNickname} onChange={this.handleValueChange}/>
  <select className="emoticon" name="emoticon" value={this.state.userEmoticon} onChange={this.handleValueChange}>
  */
    /*const clickSave = async () => {
        if (nickname==="") {
          message("확인", "닉네임과 이모티콘을 선택해주세요", "default")
          return false;
        }
        try {
          await axios
          .post("/save_image", {
            author: nickname,
            url: props.url
          }, {
            header: {
              "content-type": "application/json",
            },
          })
          .then(response => { 
            // db 저장 성공
            console.log(JSON.stringify(response.data));   
          });
        } catch (error) {
          console.log(error);
          message("ERROR", "Please check the console for an error message.", "warning")
          seNickname("");
        }
      }
       onSubmit={this.handleSubmit} action="http://localhost:5000/result" */