import React, { useState, useEffect } from 'react';
import './Cart.css';

export default function Cart({ cart, setCart }) {

  

  const [ isOpen, setIsOpen ] = useState(false);
  const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0);
  
  useEffect(() => {
    document.title = `La maison jungle : ${total} € d'achat`;
  }, [total]);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return isOpen ? (
    <div className='lmj-cart'>
      <button onClick={() => setIsOpen(false)} className="lmj-cart-toggle-button">Fermer</button>
      { cart.length > 0
        ?(<div>
            <h2>Panier</h2>
            <ul>
              {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                  {name} {price}€ x {amount}
                </div>
              ))}
            </ul>
            <h3>Total :{total}€</h3>
            <button onClick={() => setCart([])}>Vider le panier</button>
          </div>) 
        : ( <div>Votre panier est vide</div> )
      }
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button onClick={() => setIsOpen(true)}  className="lmj-cart-toggle-button">Ouvrir le panier</button>
    </div>
  )
}
