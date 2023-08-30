import React from 'react';

function Cart({ cart }) {
    return (
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.title} - ${product.cost}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Cart;