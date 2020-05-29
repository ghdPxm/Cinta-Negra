const express = require('express')
const axios = require('axios')
const server = express()
const PORT = 3000

//Operaciones Aritmeticas query

//=== Suma de dos numeros =>
server.get('/api/suma/', (request, response) => {
    const { num1, num2 } =  parseInt(request.query)
    response.json({
        resultado: (parseInt(num1) + parseInt(num2))
    });
})

//=== Resta de dos numeros =>
server.get('/api/resta/', (request, response) => {

    const { num1, num2 } =  request.query;

    let numUno = 0
    let numDos = 0
    let result = 0

    numUno = parseInt(num1)
    numDos = parseInt(num2)

    if(numUno > numDos){
        result = ( numUno - numDos )
    }else {
        result = ( numDos - numUno )
    }
    response.json({
        resultado: result
    });
})

//Operaciones Aritmeticas params
//=== Suma de dos numeros =>
server.get('/api/suma/:parameters', (request, response) => {
    const { parameters } =  request.params
    let mensaje = ""
    switch (parameters) {
        case 'dos': 
            mensaje = "La suma de dos numeros, 5 mas 6 es igual a, 11"
            break;
            case 'tres': 
            mensaje = "La suma de tres numeros, ( ( 8 mas 4 ) mas 7 ) es igual a, 19"
            break;
            case 'cuatro': 
            mensaje = "La suma de cuatro numeros, ( ( 12 mas 9 ) mas (15 mas 66) ) es igual a, 102"
            break;    
        default:
            mensaje = "Operacion no valida"
            break;
    }
    response.json({
        resultado: mensaje
    });
})

//=== Resta de dos numeros =>
server.get('/api/resta/:parameters', (request, response) => {
    const { parameters } =  request.params
    let mensaje = ""
    switch (parameters) {
        case 'dos': 
            mensaje = "La resta de dos numeros, 6 menos 5 es igual a, 1"
            break;
            case 'tres': 
            mensaje = "La resta de tres numeros, ( ( 8 menos 4 ) menos 2 ) es igual a, 2"
            break;
            case 'cuatro': 
            mensaje = "La resta de cuatro numeros, ( ( 120 menos 9 ) menos (15 menos 66) ) es igual a, 30"
            break;    
        default:
            mensaje = "Operacion no valida"
            break;
    }
    response.json({
        resultado: mensaje
    });
})



server.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))
