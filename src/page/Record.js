import "./css/Page.css";
import React, { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecordWebcam } from "react-record-webcam";
import { Setb, Setburl } from "../App";
import { Button, IconButton, Box, Flex } from 'gestalt';
import 'gestalt/dist/gestalt.css';


const Record = ({ match }) => {
  const history = useHistory();
  const num = match.params.num;
  const OPTIONS = { recordingLength: 5, fileType: "mp4" }; // 녹화 제한 시간, 확장자
  const recordWebcam = useRecordWebcam(OPTIONS);

  const setburl = useContext(Setburl);
  const Setblob = useContext(Setb);

  const [re_state, set_state] = useState(false);
  const [record_state, set_restate] = useState(false);

  useEffect(() => {
    recordWebcam.open();
    set_state(false);
  }, []);

  const set = () => { // 녹화 영상 없이 넘어갈 경우 안넘어가게 수정 필요함.
    recordWebcam.getRecording().then((respone) => Setblob(respone));
    setburl(recordWebcam.previewRef.current.currentSrc);
    history.push({
      pathname: "/Preview/" + num
    });
  };

  const start = () => {
    set_restate(true);
    recordWebcam.start();
  }

  const stop = () => {
    set_state(true);
    set_restate(false);
    recordWebcam.stop();
  }

  const retake = () => {
    set_state(false);
    recordWebcam.retake();
  }

  return (
    <div className="Page">
      <Box width= "60%" rounding={3} color="white">
        <h1>영상 녹화 페이지</h1>
        <div className="ImageBox" style={{ display: "block" }}>
          <Box paddingY={3} color="lightGray" alignContent="center">
            {re_state ? (<div> <video ref={recordWebcam.previewRef} autoPlay muted loop /></div>) :
              (<div><video ref={recordWebcam.webcamRef} autoPlay muted /></div>)}
                Camera status: {recordWebcam.status}
          </Box>
          {re_state ? (
            <Box padding={10}>
              <Button text="Retake" onClick={retake} />
            </Box>) :(
            <Box padding={10}>
              <Flex justifyContent="center" alignItems="end" padding={2} gap={6}>
                <Button size="sm" text="Start recording" color="red" onClick={start} />
                <Button size="sm" text="Stop recording" onClick={stop} disabled={!record_state}/>
              </Flex>
            </Box>)}
        </div>
        <Box marginBottom={10}>
          <Flex justifyContent="center" alignItems="end" gap={12}>
            <Link to="../Selection">
              <IconButton size="lg" icon="arrow-back" accessibilityLabel="Back"/>
            </Link>
            <IconButton size="lg" icon="arrow-forward" accessibilityLabel="Next" disabled={!re_state} onClick={set} />
          </Flex >
        </Box>
      </Box>
    </div>
  );
};

export default Record;
