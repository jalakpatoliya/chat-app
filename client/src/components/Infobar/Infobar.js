import React from 'react'
import './Infobar.css';

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

const Infobar = ({ room }) => (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={onlineIcon} alt='online' />
            <h1>{room}</h1>
        </div>

        <div className='rightInnerContainer'>
            <a href='/'>
                <img src={closeIcon} alt='close' />
            </a>

        </div>
    </div>
)

export default Infobar;