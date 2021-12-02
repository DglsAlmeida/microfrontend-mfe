import React from 'react';
import EmptyCart from '../public/assets/empty-cart.png'

const App = () => {
  return (
    <div 
      style={{ 
        width: '100%', 
        marginTop: '100px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
      }}
      >
      <img src={EmptyCart} alt=""/>
    </div>
  )
}

export default App