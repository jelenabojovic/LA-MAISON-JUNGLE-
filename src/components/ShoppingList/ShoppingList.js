import React, { useState } from 'react';
import './ShoppingList.css';
import { plantList } from '../../data/plantList';
import Categories from '../Categories/Categories';
import PlantItem from '../PlantItem/PlantItem';

export default function ShoppingList({ cart, setCart }) {
    
    const [ plant, setPlant ] = useState(plantList);

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if(currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(plant => plant.name !== name);
            setCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1}
            ])
        } else {
            setCart([
                ...cart,
                { name, price, amount: 1}
            ])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories plantList={plantList} setPlant={setPlant}/>

            <ul className='lmj-plant-list'>
                {
                    plant.map(({id, cover, name, water, light, price}) => 
                        <div key={id} >
                            <PlantItem
                                cover={cover} 
                                name={name} 
                                water={water}
                                light={light}
                                price={price}
                                />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                        
                    )
                }
            </ul>
        </div>
    )
}