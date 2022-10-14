import { NavLink } from "react-router-dom";
import NavCart from "./NavCart";

const Navbar = (props) => {
  const { cart, removeItem } = props;
  return (
    <nav>
      <div className="company-branding">
        <div className="brand-name">Silver Saddle</div>
      </div>
      <div>
        <ul className="nav-menu">
          <li>
            <NavLink to="/" end>
              {({ isActive }) => (
                <div
                  className={
                    isActive ? "active nav-menu-item" : "nav-menu-item"
                  }
                >
                  Home
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              {({ isActive }) => (
                <div
                  className={
                    isActive ? "active nav-menu-item" : "nav-menu-item"
                  }
                >
                  Shop
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              {({ isActive }) => (
                <div
                  className={
                    isActive ? "active nav-menu-item" : "nav-menu-item"
                  }
                >
                  Cart
                </div>
              )}
            </NavLink>
          </li>
          <li>
            <div className="nav-menu-item">
              <NavCart cart={cart} removeItem={removeItem} />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
