import "./css/Page.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import star from "./img/star110.png";
import one from "./img/1.png";
import two from "./img/2.png";
import thr from "./img/3.png";
import four from "./img/4.png";
import { Button, IconButton, Box, Flex, ButtonGroup } from "gestalt";

const Selection = () => {
  let [pic] = useState([one, two, thr, four]);
  let [num, m_num] = useState(0); //num이 현재 무엇을 선택했는지

  return (
    <div className="Page">
      <Box width= "60%" rounding={3} color="white">
        <h1>원하는 명화 선택</h1>
        <Box paddingY={10} color="lightGray" alignContent="center">
        <Flex alignItems="center" gap={5} direction="column">
          <Box column={10} >
            <img src={pic[num]} alt="Selected Img" width="120%"></img>
          </Box>
          <ButtonGroup>
            <Button color="white" paddingY={10}
              text="1"
              onClick={() => {
                m_num(0);
              }}
            />
            <Button color="white" paddingY={10}
              text="2"
              onClick={() => {
                m_num(1);
              }}
            />
            <Button color="white" paddingY={10}
              text="3"
              onClick={() => {
                m_num(2);
              }}
            />
            <Button color="white" paddingY={10}
              text="4"
              onClick={() => {
                m_num(3);
              }}
            />
          </ButtonGroup>
        </Flex>
        </Box>
        <Box paddingY={10}>
          <Flex justifyContent="center" alignItems="end" gap={12}>
            <Link to="./">
              <IconButton size="lg" icon="arrow-back" accessibilityLabel="Back"/>
            </Link>
            <Link to={`./Record/${num}`}>
              <IconButton size="lg" icon="arrow-forward" accessibilityLabel="Next" />
            </Link>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};
export default Selection;
