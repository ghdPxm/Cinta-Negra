import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';


const ProductsList = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        //Peticion al BackEnd
       // const url = 'http://localhost:4000'
        axios.get('http://localhost:5000/api/products')
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
        
    }, [])

    return(
        <React.Fragment>
            <h2>Products</h2>
            <div className="container">
                <div className="row  justify-content-center ">
                    <div className="col-sm-3" >
                        { products.map(product => <Product key={product._id} name={product.name} price={product.price} /> )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductsList;