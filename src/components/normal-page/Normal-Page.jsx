
import TopComponent from './TopComponent';
import ValuesPart from './Values';
import AboutThisProject from './aboutThisProject';
import styled from 'styled-components';
import BackTheProject from '../backTheProject-page-state/backTheProject';
import React, { useState } from 'react';
import CompleteState from '../complete-page-state/completeState';


const NormalPage = () => {

  const [confirmado, setConfirmado] = useState(false);
  const [backTheProjectTela, setbackTheProjectTela] = useState(false);
 

  return (
    <MainEstilizado className='main-page'>
      <TopComponent setbackTheProjectTela={setbackTheProjectTela}/>
      <ValuesPart />
      <AboutThisProject setbackTheProjectTela={setbackTheProjectTela}/>
      {backTheProjectTela ? <BackTheProject setConfirmado={setConfirmado} setbackTheProjectTela={setbackTheProjectTela}/> : null}
      {confirmado ? <CompleteState setConfirmado={setConfirmado}/> : null }
    </MainEstilizado>
  )
}

const MainEstilizado = styled.main`

   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 50%;
   gap: 20px;
  
  @media (max-width: 375px){

    width: 95%;
  }
   
`


export default NormalPage