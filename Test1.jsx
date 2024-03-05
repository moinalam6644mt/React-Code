import React from "react";
import Cart from "./Cart";

const Items = () => {
  const items = [
    { id: 1, name: "Tshirt", quantity: "1 ", price: 1000 },
    { id: 2, name: "Jeans", quantity: "1 ", price: 500 },
  ];

  return (
    <div>
      <h2>Item List</h2>
      {items.map((item) => (
        <Cart
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default Items;
