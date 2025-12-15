// first time add cart items to local storage

// setCartToLS();
// const setCartToLS = () => {
//   localStorage.setItem(
//     "cart",
//     JSON.stringify(["mahade", "hasan", "jony", 100, 200, 300])
//   );
//   getStoredCart();
// };

// retrieve cart (if any) from Local Storage
// If the "cart" key exists, parse and return the stored JSON string.
// If nothing is stored yet, return an empty array.

const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

// store updated cart to Local Storage

const saveToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// addToLSCart();
// Add a new item (ID) to the cart retrieve from localStorage.
// First, get previously saved cart data (if any) using getStoredCart(),
// then push the new ID into that cart array.
// Since this is plain JavaScript, we update the array using cart.push(id).
// (In React state, we would use the spread operator instead of push.)

const addToLSCart = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveToLS(cart);
};

/**
 * 1. retrieve data/cart (if any) from local storage (To retrieve cart/data from localStorage, use JSON.parse() to convert it back.)
 * 2. add new element with  retrieved cart
 * 3. save/store the updated cart to local storage (To store cart/data in localStorage, use JSON.stringify())
 *
 */

// remove from local storage
const removeFromLS = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveToLS(remaining);
};

export { addToLSCart, getStoredCart, removeFromLS };
