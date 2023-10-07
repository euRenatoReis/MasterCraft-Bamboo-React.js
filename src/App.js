import Header from './components/Header/Header';
import NormalPage from './components/normal-page/Normal-Page';
import { ResetStyled } from './components/GlobalStyles/Reset';
import styled from 'styled-components';
import {Fonts} from './components/GlobalStyles/Fonts';

function App() {



  return (
    <AplicacaoEstilo className="App">
      <ResetStyled />
      <Fonts />
      <Header />
      <NormalPage />
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
