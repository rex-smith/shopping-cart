import { Link } from "react-router-dom";
import NavCart from "./NavCart";

const Navbar = (props) => {
  const { cart } = props;
  return (
    <nav>
      <div className="company-branding">
        <div>Shop Name</div>
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
      <NavCart cart={cart} />
    </nav>
  );
};

export default Navbar;
