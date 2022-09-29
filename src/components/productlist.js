import React, { useState } from "react";
import items from "../data";
import Cards from "./card";
import "../styles/productlist.css"
import ItemPage from "./itempage";
import {
  Route,
  Routes
} from "react-router-dom";
import CarouselFadeExample from "./carousel";

const ProductList = ({ handleClick }) => {
  return (<div> <CarouselFadeExample />
    <section>
   
      {items.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      
      ))}
      
    </section></div>
  );
};  

export default ProductList;
