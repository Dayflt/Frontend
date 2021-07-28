# Frontend

## ✏️ How to use

  ### 1. Cloning
  ```
  $ git clone https://github.com/Dayflt/Frontend.git
  ```

  ### 2. Install Packages & Run ⚛️
  - install packages
    ```
    $ cd Frontend
    $ npm install
    ```
  - run develop cilent
    ```
    $ npm start
    ```
    Checkout web service at http://localhost:3000
    
    
    
## 🧾 NPM-Packages (libraries)
    "@emotion/core"
    "@emotion/react"
    "@testing-library/jest-dom"
    "@testing-library/react"
    "@testing-library/user-event"
    "axios"
    "bootstrap"
    "bootstrap-icons"
    "bootswatch"
    "react"
    "react-dom"
    "react-notifications-component"
    "react-record-webcam"
    "react-router-dom"
    "react-scripts"
    "react-spinners"
    "web-vitals"


## 💡 Tech Stack
  **Frontend**
  - ![react](https://img.shields.io/badge/react-v17.0.2-9cf?logo=react) 
  - ![Nodejs](https://img.shields.io/badge/Nodejs-v14.16.0-blue?logo=node.js)   
  - ![Javascript](https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript) 
  - ![Bootstrap](https://img.shields.io/badge/bootstrap-v1.4.3-9cf?logo=bootstrap) 
  - ![axios](https://img.shields.io/badge/axios-v0.21.1-9cf?color=purple)
  
  **etc**
  - ![github](https://img.shields.io/badge/github-gray?logo=github) 
  - ![GitKraken](https://img.shields.io/badge/GitKraken-gray?logo=GitKraken)  
  - ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

## 🔧 Directory Structure
```bash
├── Frontend/
    ├── public/                                   - Static 파일들 저장된 폴더
    │    ├── index.html                           - React 프로젝트가 표시될 파일
    │    └── logo.ico                             - favicon
    ├── package.json & package.lock.json          - 라이브러리를 관리하는 파일 
    ├── node_modules
    └── src/ 
         ├── index.js & index.css
         ├── App.js & App.css
         ├── App.test.js & setupTest.js
         ├── reportWebVitals.js
         ├── api.jsx                              - baseURL 설정
         └── page/
   	         ├── css /                        - 컴포넌트들의 css
   	         ├── imgs /                       - 컴포넌트들의 image
   	         ├── Gallery.js                   - 갤러리 페이지
   	         ├── Home.js                      - 메인 페이지
   	         ├── Preview.js                   - preview 페이지
   	         ├── Record.js                    - 웹캠 페이지
   	         ├── Result.js                    - 결과물 페이지
   	         ├── Selection.js                 - 사진 선택 페이지
   	         └── components/  
                      └── Modal.js                 - 결과물의 정보 입력 팝업창
                   
```  
