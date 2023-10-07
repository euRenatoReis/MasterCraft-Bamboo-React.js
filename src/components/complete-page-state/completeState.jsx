
import React from 'react';
import styled from 'styled-components';


const CompleteState = () => {
    return (

        <CompleteStateEstilizado>
            <img src='./imagens/icon-check.svg'></img>
            <h3>Thanks for your support!</h3>
            <p>
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide.
                You will get an email once our campaign is completed.
            </p>
            <button>Got it!</button>
        </CompleteStateEstilizado>

    )
}


const CompleteStateEstilizado = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export default CompleteState
