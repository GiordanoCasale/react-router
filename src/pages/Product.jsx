import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useState } from 'react'

const Product = () => {
    const [product, setProduct] = useState([]);

    const getProduct = () => {
        axios.get("")
    }

    return (
        <div>
            <Navbar />
            <h1>Product</h1>
        </div>
    )
}

export default Product
