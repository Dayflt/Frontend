import './css/Page.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import star from './img/star110.png';
import one from './img/1.png';
import two from './img/2.png';
import thr from './img/3.png';
import four from './img/4.png';
import { Button, IconButton, Box, Flex, ButtonGroup } from 'gestalt';

const Selection = () => {

  let [pic,] = useState([one, two, thr, four]);
  let [num, m_num] = useState(0); //num이 현재 무엇을 선택했는지

  return (
    <div className="Page">
      <header className="Page-header">
        <h1>
          <img src={star} className="Star-logo" alt="logo"></img>
          Synthesize Images
        </h1>
        <h3>
          바뀌고 싶은 얼굴을 선택하세요!
        </h3>
        <div className='ImageBox'>
          <ButtonGroup>
            <Button className='SelectButton' text="1" onClick={() => { m_num(0) }}/>
            <Button className='SelectButton' text="2" onClick={() => { m_num(1) }}/>
            <Button className='SelectButton' text="3" onClick={() => { m_num(2) }}/>
            <Button className='SelectButton' text="4" onClick={() => { m_num(3) }}/>
          </ButtonGroup >
          <div className='InputBox' style={{ marginright: '10%' }}>
            <img className='SelectImg' src={pic[num]} alt="select img"></img>
          </div>
        </div>
        <Box paddingY={10}>
          <Flex justifyContent="center" alignItems="end" gap={12}>
            <Link to="./">
              <IconButton size="lg" icon="arrow-back" />
            </Link>
            <Link to={`./Record/${num}`}>
              <IconButton size="lg" icon="arrow-forward" />
            </Link>
          </Flex >
        </Box>

      </header>
    </div>
  );
}
export default Selection;