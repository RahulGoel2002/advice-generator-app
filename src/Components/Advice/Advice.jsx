import React, { useEffect, useState } from 'react';
import "./style.css"
import patternDividerImgDesktop from "../../assets/pattern-divider-desktop.svg"
import iconDice from "../../assets/icon-dice.svg"

const Advice = () => {

    const [advice, setAdvice] = useState({

    })

    const fetchAdvice = () => {
        fetch("https://api.adviceslip.com/advice")
                .then(response => response.json())
                .then(adv => {
                    setAdvice(adv.slip)
                    // console.log(adv)
                })
                .catch(err => console.log(err))
    }

    useEffect(
        () => {
            fetchAdvice()
        }, []
    )

    return (
        <div className='advice'>

            <div className='advice-block'>
                <div className='advice-id'>
                    Advice #{advice.id}
                </div>
                <div className='advice-text'>
                    “{advice.advice}”
                </div>
                {/* <div className='advice-divider' > */}
                    <img className='advice-divider-pattern' src={patternDividerImgDesktop} alt='pattern divider'></img>
                {/* </div> */}
            </div>
            <div className='refreshbtn-wrapper'>
                <div onClick={
                    () => {
                        fetchAdvice()
                    }
                } className='refreshbtn'>
                    <img className='refreshbtn-icon' src={iconDice} alt="dice icon button"></img>

                </div>
            </div>

        </div>
    );
}

export default Advice;
