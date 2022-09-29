import React, { useState, useEffect } from "react";
import ProductList from "./components/productlist";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import CarouselFadeExample from "./components/carousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.css";
import ItemPage from "./components/itempage";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [detail, setDetail] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    setDetail(<ItemPage/>)
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <ProductList handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <Routes>
       
        <Route exact path='/collection/:id' element={detail} />
      </Routes>
      <ItemPage />
    </div>
  );
};

export default App;
