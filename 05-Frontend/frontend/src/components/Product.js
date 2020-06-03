import React from 'react';
//import ProductsList from './ProductsList';

const Product = (props) => {
    return(
        <div style={{ 
            padding: "15px", 
            backgroundColor: "navy", 
            color: "white",
            width: "300px",
            textAlign: "center",
            border: "1.5px solid gray",
            borderRadius: "5px",
            marginBottom: "10px" }}>
            
            <h3>{props.name}</h3>
            <h4>{`$ ${props.price}`}</h4>
        </div>
    );
}

export default Product;