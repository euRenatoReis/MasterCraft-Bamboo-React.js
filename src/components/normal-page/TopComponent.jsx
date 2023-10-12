
import React, { useState } from 'react'
import styled from 'styled-components';
import { corBotoesEetc, fundoMain, selecionadosEActiveStates } from '../GlobalStyles/Colors';

const TopComponent = (props) => {

  const [marca, setMarca] = useState(false);
  const { setbackTheProjectTela } = props;

  function abreTelaDoacao() {

    setbackTheProjectTela(true);
  }

  return (

    <TopComponentEstilo className='top-page'>
      <div className='esfera'>
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28" /><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444" /><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF" /></g></g></svg>
      </div>
      <div className='apresentacao'>
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      </div>
      <div className='botoes'>
        <button className='back-project-button' onClick={() => abreTelaDoacao()}>Back this project</button>

        {marca === true ? <label htmlFor='bookmark-id' className='bookmark' onClick={() => setMarca(marca ? marca === false : marca === true)}>
          <input id='bookmark-id' type='checkbox' hidden></input>
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" /></g>
          </svg>
          <p>Bookmark</p>
        </label> :
          <label htmlFor='bookmarked-id' className='bookmark-marked' onClick={() => setMarca(!marca ? marca === true : marca === false)}>
            <input id='bookmarked-id' type='checkbox' hidden></input>
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd"><circle fill={corBotoesEetc} cx="28" cy="28" r="28" />
                <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" /></g>
            </svg>
            <p>Bookmarked</p>
          </label>}
      </div>
    </TopComponentEstilo>

  )
}

const TopComponentEstilo = styled.div`

    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    border-radius: 10px;
    
    .esfera{

      position: absolute;
      width: 90px;
      height: 90px;
      left: 635px;
      top: 10%;
    }
    
    .apresentacao{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0px;
      margin-top: 20px;
    }

    .botoes{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 20px;
      margin-bottom: 20px;
      
    }

    .botoes button, .bookmark{
        display: flex;
        width: 150px;
        height: 50px;
        border-radius: 30px;
        justify-content: center;
        align-items: center;
        border: none;
        padding-right: 5px;
        background-color: lightgray;
        color: ${fundoMain};
        gap: 10px;
    }

    .back-project-button{ 
      color: white;
      background-color: ${corBotoesEetc};
    }

    .bookmark{
      display: flex;
      justify-content: left;
      align-items: center;
      background-color: lightgray;
      color: ${fundoMain};
    }

    .bookmark svg{
      display: flex;
      justify-self: left;
    }

    .bookmark-marked{
      display: flex;
      width: 160px;
      height: 50px;
      border-radius: 30px;
      justify-content: left;
      align-items: center;
      border: none;
      padding-right: 5px;
      background-color: lightgray;
      color: ${fundoMain};
      
    }

    .bookmark-marked{
      background-color: lightgray;
      color: ${fundoMain};
      display: flex;
      justify-content: left;
      
    }

    .bookmark-marked svg{
      display: flex;
      fill: ${selecionadosEActiveStates};
    }

    .bookmark-marked p{
      font-weight: bold;
      color: ${selecionadosEActiveStates};
    }


    @media (max-width: 375px){


       .esfera{
         position: relative;
         align-self: center;
         justify-self: center;
       }

    }
`


export default TopComponent