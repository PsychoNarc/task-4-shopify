import axios from 'axios';
import React from 'react'
import './ProductDetails.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../../redux/actions/productActions';
import { Navbar } from '../Navbar/Navbar';

export const ProductDetails = () => {
    const product = useSelector(state => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();



    useEffect(() => {
        const fetchProductsDetails = async () => {
            const response = await axios
                .get(`http://localhost:8000/catalog-data/${productId}`)
                .catch(err => console.log(err));
            dispatch(selectedProduct(response.data));
        }

        if (productId && productId !== "") fetchProductsDetails();

        return ()=>{
            dispatch(removeSelectedProduct());
        }
    }, [productId, dispatch]);

    console.log(product)

    return (
        <div className='product-details-container'>
            <Navbar navStyle="navLinks-black" />
            Product details - {productId}
            Title - {product.title}
            Price - {product.price}
            Image - {product.image}
            Alt - {product.alt}

        </div>
    )
}
