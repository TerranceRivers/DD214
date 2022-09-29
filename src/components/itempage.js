import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import ProductList from "./productlist";

function ItemPage(setShow) {
  const { id } = useParams();

  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDis] = useState("");
  const [name, setName] = useState("");
  const getAllData = () => {
    axios
      .get(`http://127.0.0.1:5000/collection/${id}`)
      .then((response) => {
        setPrice(response.data.price);
        setImg(response.data.img_urlOne);
        setDis(response.data.description);
        setName(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className='singleItem'>
  
      <div className='leftSide'>{price}</div>
      <div className='rightside'>
        <h1>{name}</h1>
        <p>{description}</p>

    
      </div>
   
    </div>
  );
}
export default ItemPage;
