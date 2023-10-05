import React, { useState } from 'react';
import './App.css';
import Banner from '../components/Banner/Banner';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer/Footer';
import ShoppingList from '../components/ShoppingList/ShoppingList';
import logo from '../assets/images/logo.png';
import Recommendation from '../components/Recommendation/Recommendation';

function App() {
  const title = 'La maison jungle';

  const cartSaved = window.localStorage.getItem('cart');
  const [cart, setCart ] = useState(cartSaved ? JSON.parse(cartSaved) : [])

  return (
    <div className="App">
      <Banner> 
        <img src={logo} alt="La maison jungle" className='lmj-logo'/>
        <h1 className='lmj-title'>{ title }</h1>
        <Recommendation />
      </Banner>

      <div className="lmj-layout-inner">
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
