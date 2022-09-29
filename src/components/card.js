import React from "react";
import ItemPage from "./itempage";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
const Cards = ({ item, handleClick }) => {
  const { name, price, img_urlOne, id } = item;

  return (
    <div className='cards'>
      <div className='image_box'>
        <img src={img_urlOne} alt='' />
      </div>
      <div className='details'>
        {name}
        <p>Price - ${price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      
      </div>
      
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
