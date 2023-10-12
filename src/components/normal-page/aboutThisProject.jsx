

import React from 'react';
import styled from 'styled-components';
import { fundoMain, corBotoesEetc, selecionadosEActiveStates } from '../GlobalStyles/Colors';

const AboutThisProject = (props) => {

    const { setbackTheProjectTela } = props;

    function fecharTela() {
        setbackTheProjectTela(true)
    }

    return (
        <AboutProjectAreaEstilo>
            <h3>About this project</h3>
            <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing height.
                Placing your monitor at eye level has the potential to improve your posture and make you more comfortable
                while at work, helping you stay focused on the task at hand.
            </p>
            <p>
                Featuring artisan craftsmanship,
                the simplicity of design creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand
            </p>

            <div className='options-plans'>
                <div className='plano'>
                    <div><h3>Bamboo Stand</h3> <p className='pladge'>Pledge $25 or more</p></div>
                    <p>
                        You get an ergonomic stand made of natural bamboo.
                        You've helped us launch our promotional campaign,
                        and you’ll be added to a special Backer member list.
                    </p>
                    <div>
                        <div className='count-left'>
                            <h1 >101</h1>
                            <p>left</p>
                        </div>
                        <button className='select-reward' onClick={() => fecharTela()}>
                            Select Reward
                        </button>
                    </div>
                </div>
                <div className='plano'>
                    <div><h3>Black Edition Stand </h3> <p className='pladge'>Pledge $75 or more</p></div>
                    <p>
                        You get a Black Special Edition computer stand and a personal thank you.
                        You’ll be added to our Backer member list.
                        Shipping is included.
                    </p>
                    <div>
                        <div className='count-left'>
                            <h1 >64</h1>
                            <p>left</p>
                        </div>
                        <button className='select-reward' onClick={() => fecharTela()}>
                            Select Reward
                        </button>
                    </div>
                </div>
                <div className='plano encerrado'>
                    <div><h3>Mahogany Special Edition</h3> <p className='pladge'>Pledge $200 or more</p></div>
                    <p>
                        You get two Special Edition Mahogany stands, a Backer T-Shirt,
                        and a personal thank you. You’ll be added to our Backer member list.
                        Shipping is included
                    </p>
                    <div>
                        <div className='count-left'>
                            <h1>0</h1>
                            <p>left</p>
                        </div>
                        <button className='select-reward' onClick={() => fecharTela()}>
                            Out of Stock
                        </button>
                    </div>
                </div>
            </div>
        </AboutProjectAreaEstilo>
    )
}


const AboutProjectAreaEstilo = styled.div`

     display: flex;
     justify-content: center;
     flex-direction: column;
     padding: 40px;
     background-color: white;
     text-align: left;
     border-radius: 10px;
    
     .options-plans{
        display: flex;
        flex-direction: column;
        gap: 15px;
     }

     .options-plans .plano{
        display: flex;
        flex-direction: column;
        border: solid 1px ${fundoMain};
        border-radius: 10px;
        padding: 20px;
     }
     
     .options-plans .plano div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
     }

     .pladge{
        color: ${corBotoesEetc};
        font-weight: bold;
     }

     .select-reward{
        background-color: ${corBotoesEetc};
        width: 180px;
        height: 45px;
        color: white;
        border-radius: 90px;
        font-weight: bold;
        border: none;
     }

     .select-reward:hover{
        background-color: ${selecionadosEActiveStates};
     }
        
     .count-left{
         gap: 10px;
         align-items: center;
     }

     .encerrado{
        color: ${fundoMain};
        filter: blur(1px);
     }

     .encerrado .select-reward{
        color: white;
        background-color: ${fundoMain};
     }

     .encerrado .pladge{
        color: ${fundoMain};
     }

     @media (max-width: 375px){

        
     }

`

export default AboutThisProject