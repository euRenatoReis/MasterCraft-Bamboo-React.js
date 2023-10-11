
import React from 'react';
import styled from 'styled-components';
import { selecionadosEActiveStates } from '../GlobalStyles/Colors';


const CompleteState = (props) => {

    const { setConfirmado } = props

    return (

        <CompleteStateEstilizado>
            <section>
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
                <h3>Thanks for your support!</h3>
                <p>
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
                    You will get an email once our campaign is completed.
                </p>
                <button onClick={() => setConfirmado(false)}>Got it!</button>
            </section>
        </CompleteStateEstilizado>

    )
}


const CompleteStateEstilizado = styled.div`

display: flex;
position: fixed;
align-self: center;
justify-self: center;
justify-content: center;
width: 100vw;
min-height: 100vh;
background-color: rgba(0, 0, 0, 0.432);
top: 0px;
padding-top: 100px;
overflow-x: hidden;

section{

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 400px;
    width: 500px;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
}

section button{

    background: none;
    background-color: ${selecionadosEActiveStates};
    color: white;
    border: none;
    width: 100px;
    height: 50px;
    border-radius: 30px;
}

`

export default CompleteState
