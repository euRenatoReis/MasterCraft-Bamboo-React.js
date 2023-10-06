import TopComponent from './TopComponent';
import ValuesPart from './Values';
import AboutThisProject from './aboutThisProject';
import styled from 'styled-components';

import React from 'react'

const NormalPage = () => {
  return (
    <MainEstilizado>
        <TopComponent/>
        <ValuesPart/>
        <AboutThisProject/>
    </MainEstilizado>
  )
}

const MainEstilizado = styled.main`

   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 50%;
   gap: 20px;

`


export default NormalPage