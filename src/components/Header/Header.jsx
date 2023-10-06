
import styled from 'styled-components'
import React from 'react'

const Header = () => {
    return (
        <HeaderEstilizado>
            <img src='../imagens/logo-mastercraft.svg' alt='logo da empresa mastercraft'></img>

            <div>
                <input value={"About"} type='button'></input>
                <input value={"Discover"} type='button'></input>
                <input value={"Get Started"} type='button'></input>
            </div>
        </HeaderEstilizado>
    )
}


const HeaderEstilizado = styled.header`

     display: flex;
     flex-direction: row;
     justify-content: space-around;
     gap: 50px;
     padding: 50px;
     color: white;
     width: 100%;
     padding-top: 20px;

     div{
        display: flex;
        gap: 15px
     }

     input{
        color: white;
        background: none;
        width: 90px;
        padding: 10px;
        border: none;
     }
`

export default Header