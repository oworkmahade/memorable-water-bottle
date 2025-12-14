// eslint prop-types warning issues
import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <h3>Shopping Cart</h3>
      <h3>Cart Length: {cart.length}</h3>

      <div className="cart-container">
        {cart.map((bottle) => (
          <img src={bottle.image}></img>
        ))}
      </div>
    </div>
  );
};

// eslint prop-types warning issues
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export { Cart };
