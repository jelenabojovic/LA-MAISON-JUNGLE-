import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {

    const { inputValue, setInputValue } = useState('');

    function changeMail(value) {
        setInputValue(value)
    }

    function sendMail() {
        if(!inputValue.includes('@')) {
            alert("Attention il n'y a pas de @, ceci n'est pas une adresse valide");
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail : 
            <input type="mail" onChange={(e) => changeMail(e.target.value)} onBlur={(e) => sendMail} value={inputValue} />
            </div>
        </footer>
    )
}