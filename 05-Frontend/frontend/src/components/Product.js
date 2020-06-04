import React from 'react';
//import ProductsList from './ProductsList';

const Product = (props) => {
    return(
        <div className="card mb-2">
            <div className="card-header">
                {props.name}
            </div>
            <div className="card-body">
                {/* <h4 class="card-title">Title</h4> */}
                <p className="card-text">{`Precio: $ ${props.price}`}</p>
                <img src="https://via.placeholder.com/150" alt=""/>
            </div>
        </div>




        /*<div style={{ 
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
        </div> */
    );
}

export default Product;