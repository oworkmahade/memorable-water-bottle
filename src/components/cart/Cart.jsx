// eslint prop-types warning issues
import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>Shopping Cart</h3>
      <h3>Cart Length: {cart.length}</h3>

      <div className="cart-container">
        {cart.map((bottle) => (
          <div style={{ marginBottom: "10px" }}>
            {" "}
            <img src={bottle.image}></img> <p>{bottle.price}</p>
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// eslint prop-types warning issues
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export { Cart };
