

import React from 'react'
import styled from 'styled-components'
import { corBotoesEetc } from '../GlobalStyles/Colors'

const ValuesPart = () => {
    return (
        <ValoresEstilizado>
            <div className='valores'>
                <div>
                    <h1>$89,914</h1><p>of $100,000 backed</p>
                </div>
                <div>
                    <h1>5,007</h1>
                    <p>total backers</p>
                </div>
                <div>
                    <h1>56</h1>
                    <p>56 days left</p>
                </div>
            </div>
            <div className='termometro'>
                <div className='destaque'></div>
            </div>
        </ValoresEstilizado>
    )
}

const ValoresEstilizado = styled.div`

    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    border-radius: 10px;
   
    .valores{
        display: flex;
        flex-direction: row;
        padding: 20px;
        width: 100%;
    }

    .valores div{
        display: flex;
        flex-direction: column;
        width: 33%;
    }

    .termometro{
       
        display: flex;
        width: 85%;
        height: 15px;
        justify-content: left;
        margin-left: 60px;
        border-radius: 15px;
        background-color: lightgray;
        margin-bottom: 20px;
    }

    .destaque{
        display: flex;
        width: 70%;
        height: 100%;
        background-color: ${corBotoesEetc};
        border-radius: 15px;
    }

    @media (max-width: 375px){

        .valores{

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 90%;
        }

        .valores div{
            display: flex;
            width: 100px;
            gap: 0px;
            border-bottom: solid 1px black;
        }

        .termometro{

            display: flex;
            max-width: 70%;
        }


    }

`


export default ValuesPart