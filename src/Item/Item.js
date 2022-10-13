import { useState } from "react";
import Inventory from "./index";

const Item = ({ params }) => {
  const getItemFromId = (id) => {
    for (let i = 0; i < Inventory.length; i++) {
      if (Inventory[i].id === id) {
        return Inventory[i];
      }
    }
    return null;
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.prevent.default();
    // Go to cart page
    // Add order to cart
    // How to get params or props when passed in as a route?
  };

  let item = getItemFromId(params.id);

  const [quantity, setQuantity] = useState(0);
  return (
    <div>
      <div className="image-container">
        <img src={item.image} alt="" />
      </div>
      <div className="item-bottom">
        <div className="column">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
        <div className="column">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              value={quantity}
              onChange={handleChange}
            />
            <button className="button button-submit" type="submit">
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Item;
