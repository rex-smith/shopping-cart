import { useState } from "react";
import CartDropdown from "./CartDropdown";

const NavCart = ({ cart }) => {
  // Need to add a boolean for onHover that then renders the dropdown items below

  const [cartVisibility, setCartVisibility] = useState(false);

  return (
    <div>
      <p>{cart.quantity} Items</p>
      <i>Cart Icon</i>
      <CartDropdown visible={cartVisibility} cart={cart} />
    </div>
  );
};

export default NavCart;
