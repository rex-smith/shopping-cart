import { Link, useNavigate } from "react-router-dom";

const CartDropdown = ({ cart, visible, removeItem }) => {
  let navigate = useNavigate();

  return (
    <div
      className="cart-dropdown"
      style={visible ? { display: "flex" } : { display: "none" }}
    >
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.orderArray.map((order) => (
            <li key={order.id} className="dropdown-order">
              <div className="column">
                <Link to={"/:" + order.item.id}>{order.item.name}</Link>
                <p>Quantity: {order.quantity}</p>
                <button onClick={removeItem(order.id)}>Remove Item(s)</button>
              </div>
              <div className="column">
                <div className="drop-image-container">
                  <img src={order.item.image} alt={order.item.name} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>No items in cart!</div>
      )}
      <button className="button" onClick={navigate("/cart")}>
        Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
