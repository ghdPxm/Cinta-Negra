const axios = require('axios');

const artistName = 'jose jose';
const apiKeyLF = 'apiKey' 

const urlLasFm = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${apiKeyLF}&format=json` 

    axios.get(urlLasFm)
    .then((axiosRes) => {
        console.log(axiosRes.data.artist.bio);
    }).catch((error) => {
        console.log(error);
    })