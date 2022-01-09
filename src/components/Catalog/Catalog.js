import React, { useEffect } from "react";
import "./Catalog.css";
import { Link } from "react-router-dom";
import { Buttons } from "../Buttons/Buttons";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";

export const Catalog = () => {
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchProducts = async () => {
    //   const response = await axios
    //     .get("http://localhost:8000/catalog-data")
    //     .catch(err => console.log(err));
    //   dispatch(setProducts(response.data));
    // }
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="catalog-container">
      <Navbar navStyle="navLinks-black" />
      <h2 className="catalog-heading">Products</h2>
      <div className="catalog-wrapper">
        {products.map(item => {
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
              <Link to={`/product/${item.id}`} className="catalog-link">
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
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
