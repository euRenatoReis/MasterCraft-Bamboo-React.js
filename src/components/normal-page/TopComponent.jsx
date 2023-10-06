
import React from 'react'
import styled from 'styled-components';
import { corBotoesEetc,fundoMain } from '../GlobalStyles/Colors';

const TopComponent = () => {
  return (

    <TopComponentEstilo>
        <div className='esfera'></div>
        <div className='apresentacao'>
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        </div>
        <div className='botoes'>
            <button className='back-project-button'>Back this project</button>
            <button className='bookmark'>Bookmark</button>
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
      background-image: url(./imagens/logo-mastercraft.svg);
      position: absolute;
      width: 90px;
      height: 90px;
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

    .botoes button{
        display: flex;
        width: 150px;
        height: 50px;
        border-radius: 30px;
        justify-content: center;
        align-items: center;
        border: none;
    }

    .back-project-button{ 
      color: white;
      background-color: ${corBotoesEetc};
    }
    .bookmark{ 
        color: ${fundoMain};
        background-image: url(./imagens/icon-bookmark.svg);
        background-position: left;
    }

`


export default TopComponent