import React, { useEffect, useState } from "react";
import "./Catalog.css";
import axios from 'axios';
// import { Link } from "react-router-dom";
import { Buttons } from "../Buttons/Buttons";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";

export const Catalog = () => {
  const [catalogData, setCatalogData] = useState(null);
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch('http://localhost:8000/catalog-data')
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data);
  //       setCatalogData(data);
  //       dispatch(setProducts(data));
  //     })
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("http://localhost:8000/catalog-data")
        .catch(err => console.log(err));
      console.log(response)
      console.log(response.data)
      setCatalogData(response.data);
      dispatch(setProducts(response.data));
    }
    fetchProducts();

  }, [setCatalogData, dispatch]);

  console.log(products);


  return (
    <div className="catalog-container">
      <Navbar navStyle="navLinks-black" />
      <h2 className="catalog-heading">Products</h2>
      <div className="catalog-wrapper">
        {catalogData && catalogData.map((item) => {
          return (
            <div className="catalog-card" key={item.id}>
              <div className="catalog-favorite">
                <span className={item.discount && "banner"}>
                  {item.discount}
                </span>
                <span>
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </span>
              </div>

              <img className="catalog-image" src={item.image} alt={item.alt} />
              <div className="catalog-info">
                <div className="catalog-button">
                  <Buttons
                    to="/"
                    buttonStyle="button-outline"
                    buttonSize="button-medium"
                  >
                    {item.button}
                  </Buttons>
                </div>
                <h3 className="catalog-title">{item.title}</h3>
                <p className="catalog-price">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
