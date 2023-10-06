
import React from 'react'

const backTheProject = () => {
    return (
        <div>
            <div> <h3>Back this project</h3> 
            <input className='close-page'></input> </div>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            <div>
                <label className='option-1'>
                    <div>
                        <input type='radio'></input>
                    </div>
                    <div>
                        <p className='title-option'>Pledge with no reward</p>
                        <p>
                            Choose to support us without a reward if you simply believe in our project.
                            As a backer, you will be signed up to receive product updates via email.
                        </p>
                    </div>
                </label>
                <label className='option-2'>
                    <div>
                        <input type='radio'></input>
                    </div>
                    <div>
                        <div>
                            <p className='title-option'>Bamboo Stand</p>
                            <p>Pledge $25 or more</p>
                            <p>101 left</p>
                        </div>
                        <p>
                            You get an ergonomic stand made of natural bamboo.
                            You've helped us launch our promotional campaign,
                            and you’ll be added to a special Backer member list.
                        </p>
                    </div>
                    ${cardSelecionado === index ?
                        <div className='plano-confirm'>
                            <p>Enter your pledge</p>
                            <div>
                                <input>$<b>25</b></input>
                                <input>Continue</input>
                            </div>
                        </div> : null   
                    }

                </label>
                <label className='option-3'>
                    <div>
                        <input type='radio'></input>
                    </div>
                    <div>
                        <div>
                            <p className='title-option'>Black Edition Stand</p>
                            <p> Pledge $75 or more</p>
                            <p>64 left</p>
                        </div>
                        <p>
                            You get a Black Special Edition computer stand and a personal thank you.
                            You’ll be added to our Backer member list. Shipping is included.
                        </p>
                    </div>
                    ${cardSelecionado === index ?
                        <div className='plano-confirm'>
                            <p>Enter your pledge</p>
                            <div>
                                <input>$<b>75</b></input>
                                <input>Continue</input>
                            </div>
                        </div> : null
                    }
                </label>
                <label className='option-4'>
                    <div>
                        <input type='radio'></input>
                    </div>
                    <div>
                        <div>
                            <p className='title-option'>Mahogany Special Edition</p>
                            <p>Pledge $200 or more</p>
                            <p>0 left</p>
                        </div>
                        <p>
                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
                            You’ll be added to our Backer member list. Shipping is included.
                        </p>
                    </div>
                    ${cardSelecionado == index ?
                        <div className='plano-confirm'>
                            <p>Enter your pledge</p>
                            <div>
                                <input>$<b>200</b></input>
                                <input>Continue</input>
                            </div>
                        </div> : null}
                </label>
            </div >
        </div >
    )
}

export default backTheProject
