import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import Shop from "./Shop/Shop";
import Cart from "./Cart/Cart";
import Item from "./Item/Item";
import Home from "./Home";
import NotFound from "./NotFound";
import "./reset.css";
import "./font.css";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [orderCounter, setOrderCounter] = useState(0);
  let navigate = useNavigate();

  const handleSubmit = (e, item) => {
    e.preventDefault();
    // Add order to cart
    setOrderCounter((prevOrderCounter) => prevOrderCounter + 1);
    let newOrder = {
      quantity: parseInt(e.target.elements.quantity.value),
      id: orderCounter,
      item: item,
    };

    setCart((prevCart) => [...prevCart, newOrder]);

    // Go to cart page
    navigate("/cart");
  };

  const removeItem = (e, orderId) => {
    e.preventDefault();
    let tempCart = [...cart];
    tempCart = tempCart.filter((order) => order.id !== orderId);
    setCart(tempCart);
  };

  return (
    <div className="App">
      <Navbar cart={cart} removeItem={removeItem} />
      <div className="main-container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route
            path="shop/:itemId"
            element={<Item handleSubmit={handleSubmit} />}
          />
          <Route
            path="cart"
            element={<Cart cart={cart} removeItem={removeItem} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
