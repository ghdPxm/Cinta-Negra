const express = require('express')
const axios = require('axios')
const server = express()
const PORT = 3000

server.get('/', (req, res) => res.send('Hola mundo'))
server.get('/perfil', (req, res) => res.json({
    firts_name: 'Gerardo',
    last_name: 'Hernandez',
}));

//Ejercicios en clases
server.get('/api/', (req, res) => {
    res.type('json');
    res.send({
        mensaje: 'Hola mundo'
    })
});

//Ejercicio 1
server.get('/api/suma/', (req, res) => {
   const {num1, num2} = req.query
   res.status(200).json({ resultado: ( parseInt(num1) + parseInt(num2) )})
});

//Ejercicio 3
server.get('/api/usuario/:usuario', (req, res) => {
    
    res.type('json');
    res.send({
        usuario: req.params.usuario
    })
});

//Ejercicio 4
server.get('/api/swapi/:id', (request, response) => {
    //peticion con request
    const { id } = request.params;
    const SWAPI_URI = `https://swapi.dev/api/people/${id}`;

    axios.get(SWAPI_URI)
    .then(axiosResponse => {
        const personaje = axiosResponse.data;
       response.json({ personaje })
    })    
    .catch(error => {
        response.status(400).json({error});
    });
   
});

//POST
server.post('/perfil', (req, res) => {
    res.send('Hola desde post');
});

server.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))