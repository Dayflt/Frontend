import React from 'react';
import Axios from 'axios';

function Temp({ match }) {
    const {num} = match.params; 

    return(
      <div>
        <input type="file" name="docx" onChange={setFile.bind(this)} />
        <input type="button" onClick={postFile} value="Upload" />
      </div>
    )
    function postFile(event) {   
       
    }
    function setFile(event) {
      //console.log(event.target.files);
      //console.log(event.target.files[0]);
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      formData.append('image_no', num); // 유저가 무엇을 선택했는지 임시값
      console.log(formData.get('file'));
      console.log(formData.get('image_no'));


      const config = {header: { 'content-type': 'multipart/form-data'},}    
      Axios.post('/api/model', formData, config).then((response) => {
        if (response.data.success) {
          console.log(response)
        } 
        else {
          alert('비디오 업로드를 실패했습니다.')
        }
      }) 

    }
  }
  
export default Temp;