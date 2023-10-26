import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    setIsInCart(true);
    setCart([...cart, { name, category }]);
  };

  const itemClassName = isInCart ? "item in-cart" : "item";

  return (
    <li className={itemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
