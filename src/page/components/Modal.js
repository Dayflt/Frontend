import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { store } from 'react-notifications-component';
import ReactNotification from 'react-notifications-component';
import axios from 'axios'
import "../css/modal.css";

const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props;
    const [nickname, seNickname] = useState("");

    const message = (title, message, type) =>{
        store.addNotification({
          title: title,
          message: message,
          type: type,
          insert: "top",
          container: "top-left",
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
    const clickSave = () => {
        axios.post('https://reqres.in/api/register', {
          username : nickname,
          category_id: ""
        })
        .then(response=>{
          console.log(response);
        })
        .catch(error=>{
          console.log(error);
          message("ERROR", "Please check the console for an error message.", "warning")
          seNickname("");
        });
      }
    
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
      }*/

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={ open ? 'openModal modal' : 'modal' }>
            { open ? (  
                <section>
                    <header>
                        닉네임과 이모티콘을 선택해주세요!
                        <ReactNotification />
                        <button className="close" onClick={close}> &times; </button>
                    </header>
                    <main>
                        <form method="post">
                            <input type="text" className="nickname" name="/api/model/gallery/{model_id}" placeholder="닉네임"/>
                                <select className="emoticon">
                                    <option>🤣</option>
                                    <option>😚</option>
                                    <option>🙃</option>
                                    <option>😱</option>
                                </select>
                        </form>
                    </main>
                    <footer>
                        <Link to ="./Gallery">
                            <button className="close" onClick={clickSave}> Share it! </button>
                        </Link>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}
export default Modal;