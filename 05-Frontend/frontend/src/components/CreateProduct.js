import React from 'react';

const CreateProduct = () => { 
    return(
        <div>
            <form action="http://localhost:5000/api/products" method="POST">
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" id=""/>
                <label htmlFor="price">Precio:</label>
                <input type="number" name="price" id=""/>
                <button type="submit">Guardar</button>
            </form>
        
        </div>
    );
}

export default CreateProduct;