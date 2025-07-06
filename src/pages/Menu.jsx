import React from 'react';
import './Menu.css';

const menuItems = [
  {
    name: 'Phantom Poppers',
    price: 5.99,
    desc: "Spicy jalapeno bites that don't actually exist",
  },
  {
    name: 'Mythical Mozzarella',
    price: 7.99,
    desc: "Stretchy and surreal cheese sticks",
  },
  {
    name: 'Illusionary Iceberg',
    price: 8.99,
    desc: "A crisp salad that's totally imaginary",
  },
  {
    name: 'Pretense Pate',
    price: 12.99,
    desc: "A classy, make-believe starter spread",
  },  
  {
    name: 'Fictional Fettuccine',
    price: 15.99,
    desc: 'Pasta from a land that only exists in code',
  },
  {
    name: 'Bogus Burger',
    price: 17.99,
    desc: 'A towering sandwich with nothing to bite',
  },
  {
    name: 'Legendary Lasagna',
    price: 18.99,
    desc: 'Layers of myth and cheese',
  },
  {
    name: 'Pretend Peking Duck',
    price: 22.99,
    desc: "Served with pixels and pancake",
  }, 
  {
    name: 'Faux Fudge Sundae',
    price: 5.99,
    desc: 'Melty, chocolaty... and not a thing',
  },
  {
    name: 'Imaginary Ice Cream',
    price: 7.99,
    desc: 'Two scoops of nothing',
  },
  {
    name: 'Notional Nougat',
    price: 7.99,
    desc: 'Sweet and satisfying in theory',
  },    
  {
    name: 'Conceptual Cupcake',
    price: 9.99,
    desc: 'Fluffy but fictional',
  },
];

export default function Menu() {
  return (
    <main className="menu-page">
      <h1>Menu</h1>

      <table className="menu-table">
        <thead>
          <tr>
            <th>Dish</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {menuItems.map(item => (
            <tr key={item.name}>
              <td>
                {item.name}
                <button className="add-to-cart">Add To Cart</button>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className="cart-section">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        <button className="clear-cart">Clear Cart</button>
      </section>
    </main>
  );
}