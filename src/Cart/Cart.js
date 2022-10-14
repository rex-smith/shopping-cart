import { useNavigate } from "react-router-dom";

const Cart = ({ cart, removeItem }) => {
  const navigate = useNavigate();
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((order) => {
              return (
                <li className="cart-order" key={order.id}>
                  <div>
                    <h4>{order.item.name}</h4>
                    <p>Quantity: {order.quantity}</p>
                    <button
                      className="button button-delete"
                      onClick={(e) => removeItem(e, order.id)}
                    >
                      Remove Item
                    </button>
                  </div>
                  <div className="cart-image-container">
                    <img src={order.item.image} alt={order.item.name} />
                  </div>
                </li>
              );
            })}
          </ul>
          <button className="button button-submit">Checkout</button>
        </div>
      ) : (
        <div>No items in your cart!</div>
      )}
      <button className="button" onClick={() => navigate("/shop")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default Cart;
