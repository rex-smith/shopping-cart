import { Link } from "react-router-dom";

const CartDropdown = ({ cart, removeItem }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.orderArray.map((order) => (
            <li key={order.id}>
              <div className="drop-image-container">
                <img src={order.item.image} alt={order.item.name} />
              </div>
              <Link to={"/:" + order.item.id}>
                <h3>{order.item.name}</h3>
              </Link>
              <p>{order.quantity}</p>
              <button onClick={removeItem(order.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No items in cart!</div>
      )}
    </div>
  );
};

export default CartDropdown;
