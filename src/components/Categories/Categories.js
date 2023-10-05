import React from 'react';
import './Categories.css';

export default function Categories({ plantList, setPlant }) {
    const categories = plantList.reduce((acc, current) => {
        !acc.includes(current.category) && acc.push(current.category);
        return acc;
    }, []);

    function displayCat(category) {
        category === 'all' 
        ? setPlant(plantList)
        : setPlant(plantList.filter(plant => plant.category === category))
    }

    return (
        <div className='lmj-categories'>
            <label htmlFor={"selectCat"}>Catégories</label>
                <select className='lmj-categories-select' onChange={(e) => displayCat(e.target.value)} id={"selectCat"}>
                    <option key={'all'} value='all'>Toutes</option>
                    {
                        categories.map((cat) =>
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        )
                    }
                </select>
        </div>
    )
}
