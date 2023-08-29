import React from 'react';
import { useCart } from 'react-use-cart';

function Cart() {
  const { items, cartTotal } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: 'auto' }} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p>Cost: {item.cost}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: {cartTotal}</p>
    </div>
  );
}

export default Cart;
