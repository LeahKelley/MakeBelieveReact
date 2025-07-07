import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cartItems, clearCart, total } = useContext(CartContext);

  return (
    <section className="cart-section">
      <h2>Your Cart ({cartItems.length} items)</h2>

      {cartItems.length > 0 ? (
        <>
          <ul className="cart-list">
            {cartItems.map((item, i) => (
              <li key={i}>
                {item.name} — ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="cart-total">
            Total: ${total.toFixed(2)}
          </p>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </section>
  );
}