import { useState } from "react";
import { useParams } from "react-router-dom";
import Inventory from "./index";

const Item = ({ handleSubmit }) => {
  let { itemId } = useParams();

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

  let item = getItemFromId(itemId);

  const [quantity, setQuantity] = useState(0);
  return (
    <div className="item">
      <div className="item-image">
        <img src={item.image} alt="" />
      </div>
      <div className="item-bottom">
        <div className="column">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
        <div className="column">
          <form action="" onSubmit={(e) => handleSubmit(e, item)}>
            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              value={quantity}
              onChange={handleChange}
            />
            <button className="button button-submit" type="submit">
              <i class="fa-solid fa-cart-plus"></i>
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Item;
