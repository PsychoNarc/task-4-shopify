import React from 'react'
import './ProductDetails.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, removeSelectedProduct } from '../../redux/actions/productActions';
import { Navbar } from '../Navbar/Navbar';
import { Buttons } from "../Buttons/Buttons";


export const ProductDetails = () => {
    const product = useSelector(state => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId));

        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId, dispatch]);

    return (
        <div className='product-details-container'>
            <Navbar navStyle="navLinks-black" />
            {
                Object.keys(product).length === 0 ? (<div>Loading...</div>) : (
                    <div className='single-product container my-5 pt-5'>
                        <div className='row'>
                            <div className='container-fluid col-lg-6 col-md-12 col-12 col-2'>
                                <div className='display-image'>
                                    <img className='image-big img-fluid w-100 pb-5' src={`../${product.image}`} alt={product.alt} />
                                </div>
                                <div className='small-img-group pb-5'>
                                    <div className='small-img-col'>
                                        <img className='small-img' width='100%' src={`../${product.image}`} alt={product.alt} />
                                    </div>
                                    <div className='small-img-col'>
                                        <img className='small-img' width='100%' src={`../${product.image}`} alt={product.alt} />
                                    </div>
                                    <div className='small-img-col'>
                                        <img className='small-img' width='100%' src={`../${product.image}`} alt={product.alt} />
                                    </div>
                                    <div className='small-img-col'>
                                        <img className='small-img' width='100%' src={`../${product.image}`} alt={product.alt} />
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-5 col-md-12 col-12'>
                                <div className="featured-favorite">
                                    <p className="product-topline">T-Shirt</p>
                                    <span>
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <h3 className='product-title text-left'>{product.title}</h3>
                                <div className="product-price">
                                    <span className="product-price-text text-decoration-line-through">
                                        {product.price}
                                    </span>
                                    <span className="product-price-text font-weight-bold">$290</span>
                                    <span className={product.discount && "banner"}>{product.discount}</span>
                                </div>
                                <select className='my-3'>
                                    <option>Select Size</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                                <div className='quantity-section'>
                                    <label className='q-label'>Quantity</label>
                                    <input type='number' value='1' />
                                </div>

                                <div className="button-wrap">
                                    <Buttons to="/">{product.button}</Buttons>
                                    <Buttons to="/" buttonStyle="button-outline" buttonSize="button-medium">Buy Now</Buttons>
                                </div>
                                <div className="featured-tags">
                                    <p>Tags</p>
                                    <span className="banner-tags">2021</span>
                                    <span className="banner-tags">Print</span>
                                    <span className="banner-tags">T-Shirts</span>
                                </div>
                                <div className="featured-catalogues">
                                    <p>Catalogue</p>
                                    <span className="banner-tags">T-Shirts</span>
                                </div>
                                <p className='product-description'>{product.description}</p>
                                <div className='product-highlights'>
                                    <h4 className={product.highlights && "product-highlights"}>{product.features}</h4>
                                    <ul className='highlights-ul'>
                                        {product.highlights.map((highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>



                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}
