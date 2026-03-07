import { useState } from "react";

export default function ShopingCart() {
  const products = [
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 2 },
    { id: 3, name: "Orange", price: 3 },
    {id: 4, name: "Tomato", price: 1.50},
  ];
  const [cart, setCart] = useState([]);

  return (
    <div className="ml-30 mt-20 w-100  shadow rounded flex flex-col items-center gap-6 pt-4">
      <h1>Shoping Cart (task 13 ShopingCart.jsx)</h1>
      {products.map((product) => (
        <div key={product.id} className="flex gap-4 items-center">
          <p>
            {product.name} - ${product.price}
          </p>
          <button
          onClick={()=> setCart([...cart, product])}
          className="borde rounded p-2 shadow bg-teal-200"
          >Add to cart</button>
        </div>
      ))}
      <div>Items in cart: {cart.length}</div>
      <h2>Total price: $
        {cart.reduce((sum, item) => sum + item.price, 0)}
      </h2>
    </div>
  );
}
