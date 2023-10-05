import React from 'react';

export default function Recommendation() {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;

    return isSpring ? <p className='lmj-recommandation'>C'est le printemps, rempotez !'</p> : null;
}
