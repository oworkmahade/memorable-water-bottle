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

export { Cart };
