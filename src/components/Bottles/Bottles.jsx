import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <>
      <div style={{ border: "2px solid red", marginBottom: "20px" }}>
        <h3>Shopping Cart</h3>
        <p>Items: {cart.length}</p>
      </div>

      <div className="bottles-style">
        {bottles.map((bottle) => (
          <Bottle
            id={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
