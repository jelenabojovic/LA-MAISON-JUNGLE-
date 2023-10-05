import React from 'react';
import CareScale from '../CareScale/CareScale';
import './PlantItem.css';

export default function PlantItem ({ cover, name, water, light, price}) {
    
    function handleClick(plantname) {
        alert(`Vous voulez acheter 1 ${plantname} ? Très bon choix 🌱✨`)
    }

    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <span className="lmj-plant-item-price">{price} €</span>
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover' />
            { name }
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
        </li>
    )
}