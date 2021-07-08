import React from 'react';
import { Link } from "react-router-dom";
import "../css/modal.css";

const Modal = ( props ) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

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
                        <form method="post">
                            <input type="text" className="nickname" name="/api/model/gallery/{model_id}" placeholder="닉네임"></input>
                            <div className="emoticon_box">
                                <div className="emoticon">
                                🤣😚🙃😱
                                </div>
                            </div>
                        </form>
                    </main>
                    <footer>
                        <Link to ="./Gallery">
                            <button className="close" onClick={close}> Share it! </button>
                        </Link>
                    </footer>
                </section>
            ) : null }
        </div>
    )
}
export default Modal;