const mongoose = require('mongoose');
const express = require('express');
const server = express();
const PORT = 4000;

//BD URI
const MONGO_URI = 'mongodb://gera:TempMon123g0@cintanegra-shard-00-00-qxhj9.mongodb.net:27017,cintanegra-shard-00-01-qxhj9.mongodb.net:27017,cintanegra-shard-00-02-qxhj9.mongodb.net:27017/test?ssl=true&replicaSet=CintaNegra-shard-0&authSource=admin&retryWrites=true&w=majority'

//Conexion a la Base de Datos
mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
} )
.then(()=> console.log('Successuful Connection to Atlas'))
.catch(() => console.log('Atlas Connecct Error'));

//Mongoose es un ODM -> Object Document Mapping
//Collectors.create Collectors.find // Collectors es un MODELO
//Crear un modelo requiere un ESQUEMA
const collectorSchema = new mongoose.Schema({ 
    name: {
        type: String, 
        required: true,
    },
    gender: String,
    actors: [String],
    description: String,
 });

 //Se crea el modelo 
 const Collector = mongoose.model('Collector', collectorSchema);

 //middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

//EndPoint de prueba 
server.get('/', (req, res) => {
    res.json({ message: 'Hello Wordl'})
});

/*
    Objetivo: Crear un CRUD de una coleccion basica para un coleccionista de peliculas
*/

//EndPoints CRUD

//CREATE
server.post('/api/collectors', (req, res) =>{
    //Se intenta crear un documento en la BD
    const { body } = req;
    Collector.create(body)
    .then( collector => res.status(201).json( collector ))
    .catch( err => res.status(400).json({ err }));
});

//RED (ALL)
server.get('/api/collectors', (req, res) =>{
    //Busco y obtengo todos los pets en la BD
    Collector.find()
    .then( collectors => res.status(201).json( collectors ))
    .catch( err => res.status(400).json({ err }));
});

//RED (ONE)
server.get('/api/collectors/:id', (req, res) =>{
     //Utilizo el ID para buscar en la BD
    const { id } = req.params;
    Collector.findById(id)
    .then( collector => res.status(200).json( collector ))
    .catch( err => res.status(404).json({ err }));
});

//UPDATE
server.patch('/api/collectors/:id', (req, res) =>{
    //Utilizo el ID para buscar  y actualizar en la BD
    const { id } = req.params;
    const { body } = req;
    Collector.findByIdAndUpdate(id, body, { new: true })
    .then( collector => res.status(200).json( collector ))
    .catch( err => res.status(404).json({ err }));
});

//DELETE
server.delete('/api/collectors/:id', (req, res) =>{
        //Utilizo el ID para buscar  y borrar en la BD
        const { id } = req.params;
        Collector.findByIdAndDelete(id)
        .then( res => res.status(204).json({ res }))
        .catch( err => res.status(404).json({ err }));
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

