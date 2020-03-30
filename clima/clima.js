const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e1e89ec5aad74a68c2dc4b9b338c48b0&units=metric`)
    return resp.data.main.temp;
}



module.exports = {
    getClima
}