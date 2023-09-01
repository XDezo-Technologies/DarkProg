import React from 'react';
import Navbar from '../home/Navbar';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart({ cart }) {
  const navigate = useNavigate();
    return (
      <>
      <Navbar backgroundColor="Black" />
      <div className='cart'>
      <div className='cart_back'><div onClick={() => navigate(-1)}>Product details</div><i class="fa-solid fa-angle-right"></i><span> Payment </span> </div>
        <div>
          <h1>Your Cart</h1>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                <div className="cart_products">
                  <img className="cart_image" src={product.image} alt="" />
                  <div className="cart_product_detail">
                    <div className="cart_product_name">{product.title}</div>
                    <div className="cart_product_cost">{product.cost}</div>
                  </div>
                  <div className="cart_action">
                  <button>Remove</button>
                </div>
                </div>   
              </li>
            ))}
          </ul>
        </div>
      </div></>
    );
  }
  
  export default Cart;