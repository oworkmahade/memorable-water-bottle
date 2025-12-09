import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, brand, price, features, image } = bottle;

  return (
    <div className="bottle-style">
      <h3>{name}</h3>
      <p>Brand: {brand}</p>
      <p>Price: $ {price}</p>
      <div>
        <img style={{ width: "300px" }} src={image}></img>
      </div>
      <p>Features: {features}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
