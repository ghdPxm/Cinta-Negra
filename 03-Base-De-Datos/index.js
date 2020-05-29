
const mongoose = require('mongoose');
const express = require('express');
const server = express();
const PORT = 4000;


//Tomar la url de conexion de mongo atlas
//Sustituir usuario y contraseña en esa url

const MONGO_URI = 'mongodb://gera:TempMon123g0@cintanegra-shard-00-00-qxhj9.mongodb.net:27017,cintanegra-shard-00-01-qxhj9.mongodb.net:27017,cintanegra-shard-00-02-qxhj9.mongodb.net:27017/test?ssl=true&replicaSet=CintaNegra-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
} )
.then(()=> console.log('Successuful Connection to Atlas'))
.catch(() => console.log('Atlas Connecct Error'));

//Mongoose es un ODM -> Object Document Mapping
//Pets.create Pets.find // Pets es un MODELO
//Crear un modelo requiere un ESQUEMA
const petsSchema = new mongoose.Schema({ 
    name: {
        type: String, 
        required: true,
    },
    breed: String,
    sex: String,
    weight: Number,
    type: {
        type: String,
        required: true,
    },
    vaccine: [String],
 });

 //Se crea el modelo 
 const Pest = mongoose.model('Pest', petsSchema);


//middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

//EndPoint de prueba 
server.get('/', (req, res) => {
    res.json({ message: 'Hello Wordl'})
});

/*
    Objetivo: Crear un CRUD de una coleccion basica para una veterinaria
*/

//EndPoints CRUD

//CREATE
server.post('/api/pets', (req, res) =>{
    //Se intenta crear un documento en la BD
    const { body } = req;
    Pest.create(body)
    .then( pet => res.status(201).json( pet ))
    .catch( err => res.status(400).json({ err }));
});

//RED (ALL)
server.get('/api/pets', (req, res) =>{
    //Busco y obtengo todos los pets en la BD
    Pest.find()
    .then( pets => res.status(201).json( pets ))
    .catch( err => res.status(400).json({ err }));
});

//RED (ONE)
server.get('/api/pets/:id', (req, res) =>{
     //Utilizo el ID para buscar en la BD
    const { id } = req.params;
    Pest.findById(id)
    .then( pet => res.status(200).json( pet ))
    .catch( err => res.status(404).json({ err }));
});

//UPDATE
server.patch('/api/pets/:id', (req, res) =>{
    //Utilizo el ID para buscar  y actualizar en la BD
    const { id } = req.params;
    const { body } = req;
    Pest.findByIdAndUpdate(id, body, { new: true })
    .then( pet => res.status(200).json( pet ))
    .catch( err => res.status(404).json({ err }));
});

//DELETE
server.delete('/api/pets/:id', (req, res) =>{
        //Utilizo el ID para buscar  y borrar en la BD
        const { id } = req.params;
        console.log(id)
        Pest.findByIdAndDelete(id, { new: true })
        .then( res => res.status(204).json({ res }))
        .catch( err => res.status(404).json({ err }));
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

