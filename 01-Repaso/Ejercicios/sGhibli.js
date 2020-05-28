const request = require('request')

const urlGhibli = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'

request.get(urlGhibli, (err, res, body) => {

    return new Promise((resolve, reject) => {
        res.statusCode === 200
        ?resolve(JSON.parse(body))
        :reject(`Error ${res.statusCode}`)
    }).then((res) => {
    console.log(`Titulo: ${res.title}`);
    console.log(`Descripción: ${res.description}`);
    console.log(`Director: ${res.director}`);
}).catch((err) => { console.log(err);});

});