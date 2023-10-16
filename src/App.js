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
   background-image: url(../public/imagens/image-hero-desktop.jpg);
   background-repeat: no-repeat;
   background-color: lightgray;
   text-align: center;
   overflow-x: hidden;

   @media (max-width: 375px){

       body{

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        font-weight: 400; 
        background-image: url(../public/imagens/image-hero-mobile.jpg);
        background-color: lightgray;
        max-width: 375px;
        overflow-x: hidden;
       }

       ${NormalPage}{

           display: flex;
           max-width: 375px;
           padding: 10px;
           overflow-x: hidden;
       }

   }

`


export default App;
