import { NavLink } from "react-router-dom";
import NavCart from "./NavCart";

const Navbar = (props) => {
  const { cart } = props;
  return (
    <nav>
      <div className="company-branding">
        <div className="brand-name">Silver Saddle Outfitters</div>
      </div>
      <div>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              to="/shop"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink
              to="/cart"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              Cart
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavCart cart={cart} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
