import Header from './components/Header/Header';
import NormalPage from './components/normal-page/Normal-Page';
import { ResetStyled } from './components/GlobalStyles/Reset';
import styled from 'styled-components';
import {Fonts} from './components/GlobalStyles/Fonts';
import CompleteState from './components/complete-page-state/completeState';
import { useState } from 'react';

function App() {

  const [confirmado, setConfirmado] = useState(false);
  // quando eu terminar de escolher um plano será true

  return (
    <AplicacaoEstilo className="App">
      <ResetStyled />
      <Fonts />
      <Header />
      <NormalPage />
      ${ confirmado ? 
          <CompleteState/>  
      : null
      }
    </AplicacaoEstilo>
  );
}


const AplicacaoEstilo = styled.div`

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-image: url(./imagens/image-hero-desktop.jpg);
   background-repeat: no-repeat;
   background-size: contain;
   background-color: lightgray;
   text-align: center;

`


export default App;
