import React from 'react';
import  { ReactComponent as Sun } from '../../assets/images/sun.svg';
import  { ReactComponent as Water} from '../../assets/images/water.svg';

function infosCare (type, value) {
    let quantity;

    switch (value) {
        case 1: quantity = "peu";
             break;
        case 2: quantity = "modérément";
             break;
        case 3: quantity = "beaucoup";
             break;
        default: quantity = '';
    }
    let cat = type === 'water' ? "d'arrosage" : "de lumière";

    alert(`Cette plante requière ${quantity} ${cat}`);
}

export default function infosCare ({scaleValue, careType}) {
    const range = [1,2,3];

    const scaleType = careType === 'light' ? <Sun /> : <Water />;

    return (
        <div onClick={() => infosCare(careType, scaleValue)}>{
            range.map(element => 
                scaleValue >= element ? <span key={element.toString()}>{scaleType}</span> : null
            )
        }</div>
    )
}


