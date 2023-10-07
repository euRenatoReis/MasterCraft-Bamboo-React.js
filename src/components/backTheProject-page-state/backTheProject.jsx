
import React, { useState } from 'react'
import styled from 'styled-components';
import { fundoMain } from '../GlobalStyles/Colors';

const BackTheProject = (props) => {

    const [cardSelecionado, setCardSelecionado] = useState(1);
    const { setConfirmado, setbackTheProjectTela } = props

    function SelecionarCard() {

        setCardSelecionado()
    }

    function funcaoDoado() {

        setbackTheProjectTela(false)
        setConfirmado(true)
    }

    return (
        <BackTheProjectTelaEstilo>
            <div className='top-BackProjectPage'> <h3>Back this project</h3>
                <input className='close-page' type='button' onClick={setbackTheProjectTela(false)}></input>
            </div>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            <div className='options-cards'>
                <label className='option-1' htmlFor='option1' onClick={() => SelecionarCard()}>
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
                <label className='option-2' htmlFor='option2' onClick={() => SelecionarCard()}>
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
                                <input className='value-edit' placeholder='$' value={"25"} type='text'></input>
                                <input onClick={funcaoDoado} value={"Confirmar"} type='button'></input>
                            </div>
                        </div> : null
                    }

                </label>
                <label className='option-3' htmlFor='option3' onClick={() => SelecionarCard()}>
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
                                <input className='value-edit' placeholder='$' value={"75"}></input>
                                <input onClick={funcaoDoado} value={"Confirmar"} type='button'></input>
                            </div>
                        </div> : null
                    }
                </label>
                <label className='option-4' htmlFor='option4' onClick={() => SelecionarCard()}>
                    <div className='option-information-div'>
                        <input className='input-radio' type='radio' id='option4' name='optionDonat' ></input>
                        <div>
                            <div className='cabecalho-title'>
                                <p className='title-option'>Mahogany Special Edition</p>
                                <p>Pledge $200 or more</p>
                                <p className='restante'>0 left</p>
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
                                <input className='value-edit' placeholder='$' value={"200"}></input>
                                <input onClick={funcaoDoado} value={"Confirmar"} type='button'></input>
                            </div>
                        </div> : null}
                </label>
            </div >
        </BackTheProjectTelaEstilo >
    )
}


const BackTheProjectTelaEstilo = styled.div`

    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
 
    .top-BackProjectPage{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 50px;
    }

    .close-page{
        background-image: url(../imagens/icon-close);
        display: flex;
        width: 40px; 
        height: 40px;

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
    }

    .option-information-div div .text-selecionado-option{
        display: flex;
        justify-content: left;
    }

    .value-edit{
        font-weight: bold;
    }

    .option-information-div div .cabecalho-title{
        display: flex;
        flex-direction: row;
        gap: 20px;
        width: 90%;
        justify-content: left;
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

    .input-radio{

        display: flex;
        width: 30px;
        height: 30px;
        margin-top: 50px;
        margin-left: 20px;
    }
`

export default BackTheProject
