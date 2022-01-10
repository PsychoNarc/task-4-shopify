import React, { useEffect, useState } from "react";
import "./Catalog.css";
import { Link } from "react-router-dom";
import { Buttons } from "../Buttons/Buttons";
import { Navbar } from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
import ReactPaginate from 'react-paginate';

export const Catalog = () => {
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber]= useState(0);

  const productsPerPage= 9;
  const pagesVisited= pageNumber*productsPerPage;

  const displayProducts= products.slice(pagesVisited, pagesVisited+productsPerPage);
  console.log(displayProducts);

  const pageCount= Math.ceil(products.length/productsPerPage);
  const changePage= ({selected})=>{ 
    setPageNumber(selected);
  }

  const previous= ()=>{
    return (
      <i className="fa fa-arrow-left"></i>
    )
  }

  const next= ()=>{
    return (
      <i className="fa fa-arrow-right"></i>
    )
  }

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
        {displayProducts.map(item => {
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
      <ReactPaginate
        previousLabel={previous()}
        nextLabel={next()}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        pageLinkClassName= {"pageLink"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};
