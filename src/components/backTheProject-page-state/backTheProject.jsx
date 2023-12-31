
import React, { useState } from 'react'
import styled from 'styled-components';
import { fundoMain, selecionadosEActiveStates } from '../GlobalStyles/Colors';

const BackTheProject = (props) => {

    const [cardSelecionado, setCardSelecionado] = useState(1);
    const { setConfirmado, setbackTheProjectTela } = props;

    function fecharTela() {
        setbackTheProjectTela(false);
    }

    function SelecionarCard(option) {
        setCardSelecionado(option);
    }

    function funcaoDoado() {
        setConfirmado(true);
        setbackTheProjectTela(false);
    }

    return (
        <BackTheProjectTelaEstilo>
            <section>
                <div className='top-BackProjectPage'> <h3>Back this project</h3>
                    <button className='close-page' type='button' onClick={() => fecharTela()}>
                        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fill-rule="evenodd" opacity=".4" /></svg>
                    </button>
                </div>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

                <div className='options-cards'>
                    <label className='option-1' htmlFor='option1' onClick={() => SelecionarCard(1)}>
                        <div className='option-information-div'>
                            <input className='input-radio' type='radio' id='option1' name='optionDonat' ></input>
                            <div className='cabecalho-title'>
                                <p className='title-option'>Pledge with no reward</p>
                                <p className='text-selecionado-option'>
                                    Choose to support us without a reward if you simply believe in our project.
                                    As a backer, you will be signed up to receive product updates via email.
                                </p>
                            </div>
                        </div>
                    </label>
                    <label className='option-2' htmlFor='option2' onClick={() => SelecionarCard(2)}>
                        <div className='option-information-div'>
                            <input className='input-radio' type='radio' id='option2' name='optionDonat' ></input>

                            <div>
                                <div className='cabecalho-title'>
                                    <p className='title-option'>Bamboo Stand</p>
                                    <p>Pledge $25 or more</p>
                                    <p className='restante'>101 left</p>
                                </div>
                                <p className='text-selecionado-option'>
                                    You get an ergonomic stand made of natural bamboo.
                                    You've helped us launch our promotional campaign,
                                    and you’ll be added to a special Backer member list.
                                </p>
                            </div>
                        </div>
                        {cardSelecionado === 2 ?
                            <div className='plano-confirm'>
                                <p>Enter your pledge</p>
                                <div>
                                    <input className='value-edit' placeholder='$25' type='number'></input>
                                    <input className='botao-confirm' onClick={() => funcaoDoado()} value={"Confirmar"} type='button'></input>
                                </div>
                            </div> : null
                        }

                    </label>
                    <label className='option-3' htmlFor='option3' onClick={() => SelecionarCard(3)}>
                        <div className='option-information-div'>
                            <input className='input-radio' type='radio' id='option3' name='optionDonat' ></input>

                            <div>
                                <div className='cabecalho-title'>
                                    <p className='title-option'>Black Edition Stand</p>
                                    <p> Pledge $75 or more</p>
                                    <p className='restante'>64 left</p>
                                </div>
                                <p className='text-selecionado-option'>
                                    You get a Black Special Edition computer stand and a personal thank you.
                                    You’ll be added to our Backer member list. Shipping is included.
                                </p>
                            </div>
                        </div>
                        {cardSelecionado === 3 ?
                            <div className='plano-confirm'>
                                <p>Enter your pledge</p>
                                <div>
                                    <input className='value-edit' placeholder='$75' type='number'></input>
                                    <input className='botao-confirm' onClick={() => funcaoDoado()} value={"Confirmar"} type='button'></input>
                                </div>
                            </div> : null
                        }
                    </label>
                    <label className='option-4' htmlFor='option4' onClick={() => SelecionarCard(4)}>
                        <div className='option-information-div'>
                            <input className='input-radio' type='radio' id='option4' name='optionDonat' ></input>      
                            <div>
                                <div className='cabecalho-title'>
                                    <p className='title-option'>Mahogany Special Edition</p>
                                    <p>Pledge $200 or more</p>
                                    <p className='restante'>2 left</p>
                                </div>
                                <p className='text-selecionado-option'>
                                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
                                    You’ll be added to our Backer member list. Shipping is included.
                                </p>
                            </div>
                        </div>
                        {cardSelecionado === 4 ?
                            <div className='plano-confirm'>
                                <p>Enter your pledge</p>
                                <div>
                                    <input className='value-edit' placeholder='$200' type='number'></input>
                                    <input className='botao-confirm' onClick={() => funcaoDoado()} value={"Confirmar"} type='button'></input>
                                </div>
                            </div> : null}
                    </label>
                </div >
            </section>
        </BackTheProjectTelaEstilo >
    )
}


const BackTheProjectTelaEstilo = styled.div`

    display: flex;
    position: fixed;
    align-self: center;
    justify-self: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.432);
    top: 0px;
    padding-top: 10px;
    overflow-x: hidden;
    padding-bottom: 50px;
 
    section{ 
        background-color: white;
        width: 650px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 10px;
        overflow-x: hidden;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .top-BackProjectPage{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 50px;
    }

    .close-page{
        background: none;
        display: flex;
        width: 40px; 
        height: 40px;
        justify-content: center;
        align-items: center;
        border: none;
        position: relative;
      
    }

    .options-cards{

        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .options-cards label{
        display: flex;
        flex-direction: column;
        border: solid 1px ${fundoMain};
        border-radius: 10px;
        background-color: white;
        padding: 20px;
        gap: 10px;
    }

    .option-information-div{
        display: flex;
        flex-direction: row;
    }

    .option-information-div div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        ackground-color: red;
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;
    }

    .option-information-div div .text-selecionado-option{
        display: flex;
        justify-content: left;
    }

    .value-edit, .botao-confirm{
        font-weight: bold;
        width: 100px;
        height: 30px;
        border-radius: 45px;
        padding: 5px;
        margin-right: 10px;
    }

    .value-edit{
       
        border: 1px solid lightgray;
        font-weight: bold;
        color: black;
        background-color: none;
        padding-left: 20px;
    }

    .botao-confirm{

        border: none;
        font-weight: bold;
        color: white;
        background-color: ${selecionadosEActiveStates}
    }

    .option-information-div div .cabecalho-title{
        display: flex;
        flex-direction: row;
        width: 90%;
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;
        text-wrap: nowrap;
    }

    .option-information-div div .cabecalho-title .restante{
        margin-left: 90px;  
        font-weight: bold;
        color: black;
    }
    
    .option-information-div div .cabecalho-title p{
        display: flex;
        text-align: left;
    }

    .option-information-div div .cabecalho-title p:hover{
        color: ${selecionadosEActiveStates};
        cursor: grab;
    }

    .input-radio{

        display: flex;
        width: 50px;
        height: 50px;
        margin-top: 50px;
        margin-left: 20px;
        border-color: ${selecionadosEActiveStates};
    }

    .input-radio:checked{
        border-color: ${selecionadosEActiveStates};
    }

    .plano-confirm{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
    }

    @media (max-width: 375px){
 
        min-height: 659px;
        position: absolute;

        section{

            display: flex;
            max-width: 95%;
            height: 1200px;
            overflow-y: hidden;
        }

        label{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            text-wrap: wrap;
            justify-content: center;
        
        }

        label div{
            display: flex;
            flex-direction: column;
            padding: 20px;
        }


    }


`

export default BackTheProject
