import { useState } from "react";
import CartDropdown from "./CartDropdown";

const NavCart = ({ cart, removeItem }) => {
  // Need to add a boolean for onHover that then renders the dropdown items below

  const [cartVisibility, setCartVisibility] = useState(false);

  const cartItemQuantity = (cart) => {
    let cartQuantity = 0;
    for (let i = 0; i < cart.length; i++) {
      cartQuantity += cart[i].quantity;
    }
    return cartQuantity;
  };

  const toggleCartVisibility = (e) => {
    e.preventDefault();
    setCartVisibility(!cartVisibility);
  };

  return (
    <div className="nav-cart">
      <div
        className="cart-drop-button"
        onClick={(e) => toggleCartVisibility(e)}
      >
        <div>
          {cartItemQuantity(cart)} Item{cartItemQuantity(cart) !== 1 ? "s" : ""}
        </div>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <CartDropdown
        visible={cartVisibility}
        cart={cart}
        removeItem={removeItem}
      />
    </div>
  );
};

export default NavCart;
