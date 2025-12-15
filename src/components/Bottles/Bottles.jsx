import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToLSCart,
  getStoredCart,
  removeFromLS,
} from "../../utilities/localStorage";
import { Cart } from "../cart/cart";
import "../cart/Cart.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length > 0) {
      const lsStoredCart = getStoredCart();

      const savedCart = [];
      for (const id of lsStoredCart) {
        const lsStoredBottle = bottles.find((bottle) => bottle.id === id);
        if (lsStoredBottle) {
          savedCart.push(lsStoredBottle);
        }
      }
      setCart(savedCart);

      console.log(cart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLSCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    // visual cart remove
    // remove from LS

    removeFromLS(id);
  };

  /**
 * 🔑 Short answer (core idea)

You need BOTH because they solve TWO DIFFERENT PROBLEMS:

useEffect([bottles]) → Initialize cart from localStorage (on page load / refresh)

handleAddToCart → Update cart immediately when user clicks a button

They are NOT duplicates. They run at different times for different reasons.
 */

  return (
    <>
      <div style={{ border: "2px solid red", marginBottom: "20px" }}>
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>

      <div className="bottles-style">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
      {/* <div className="cart-container">
        {cart.map((cart) => (
          <Cart key={cart.id} cart={cart}></Cart>
        ))}
      </div> */}
    </>
  );
};

export default Bottles;

/**
 * Steps to create and run the project using Vite and npm:
 *
 * 1. Create and run the project using Vite and npm commands.
 * 2. Inside the src folder, create a components folder.
 * 3. Create Bottles, Bottle, and Cart folders under components.
 *    - Inside each folder, create the corresponding files:
 *      Bottles.jsx, Bottle.jsx, Cart.jsx
 *      Bottles.css, Bottle.css, Cart.css
 *
 * 4. Plan: Fetch an array of smart bottle objects and display them on a page.
 *    Users will be able to add individual bottles to the shopping cart.
 *
 * 5. In Bottles.jsx:
 *    - Create state using useState.
 *    - Fetch the array of objects using useEffect.
 *    - Update the state with fetched data.
 *
 * 6. Map the state data to the child component (Bottle.jsx).
 *    - Receive props in the child component.
 *    - Destructure the data and display it.
 *
 * 7. Remember:
 *    - State must be created and updated in the parent component.
 *    - Event triggers can be placed in child components.
 *
 * 8. To add bottles to the shopping cart:
 *    - Create a "Purchase" button in Bottle.jsx.
 *    - Create a handleCart function that receives the clicked bottle as a parameter.
 *    - Use a callback function when passing parameters to avoid automatic execution.
 *
 * 9. Update cart state in Bottles.jsx:
 *    - Use the spread operator instead of push.
 *    - Store cart data using useState.
 *    - Pass cart data to child components if needed.
 *
 * 10. To persist cart data in localStorage:
 *     - Create a localStorage.js file inside the utilities folder.
 *     - Create helper functions such as addToLS (add to localStorage).
 *     - First, retrieve previously stored cart data using getStoredCart().
 *     - Parse stored data using JSON.parse().
 *     - Add the new bottle ID to the existing cart using push (plain JavaScript).
 *     - Save the updated cart back to localStorage using saveToLS()
 *       with JSON.stringify().
 */
