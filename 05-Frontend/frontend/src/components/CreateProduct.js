import React, { useState } from 'react';
import axios from 'axios';
import '../css/styles.css'; 

const CreateProduct = (props) => { 
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/products', { name, price })
        .then((res) => {
            alert("El producto se a creado con exito")
            //Esta linea se usa para redireccionar a una ruta en particular
            props.history.push('/')
            //Actualizar el estado de un componente
            //Hacer una peticion get para setear los productos
            /*
            .then(() => axios.get('http://localhost:3000/api/products))
            .then((res) => props.setProducts(res.data))
            .catch((err) => console.log( err ));
            */

        })
        .catch((err) => console.log(err));

    }



    return(
        <div className="Contenedor">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre: </label>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }                
                />
                <label htmlFor="price">Precio: </label>
                <input 
                    type="number" 
                    name="price"
                    placeholder="Price"
                    value={ price }
                    onChange={ (e) => setPrice(e.target.value) }
                />
                <button type="submit">Guardar</button>
            </form>
        
        </div>
    );
}

export default CreateProduct;