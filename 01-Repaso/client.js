const request = require('request')

const urlRequest = ' https://rickandmortyapi.com/api/character'

request.get(urlRequest, (error, response, body) => {
    //Con operador ternarioclear
    // response.statusCode === 200
    // ? console.log(JSON.parse(body))
    // : console.log('Error en la peticion', response.statusCode);

/* 
    //Sin operador ternario
    if(response.statusCode === 200){
        const characters = JSON.parse(body).results;
        // console.log(characters);

        characters.map(character => {
        console.log(character.name);
        })
    }else{
        console.log('Error en la peticion');
    } */


    //Retornando una promesa
    return new Promise((resolve, reject) => {
        response.statusCode === 200
            ? resolve(JSON.parse(body).results)
            : reject(`Error ${response.statusCode}`);
        }).then(response => console.log()) //Funcion de flecha optimizada
    .catch((error) => { return console.log(error); }); //Funcion de flecha 
    });
    // //Sin operador ternario
    // if(response.statusCode === 200){
    //     const characters = JSON.parse(body).results;
    //    // console.log(characters);

    //    characters.map(character => {
    //        console.log(character.name);
    //    })
    // }else{
    //     console.log('Error en la peticion');
    // }
