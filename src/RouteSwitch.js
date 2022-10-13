import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./Nav/Navbar";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Item from "./Item/Item";
import Home from "./Home";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:itemId" element={<Item />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
