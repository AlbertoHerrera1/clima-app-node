const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encoderURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderURL}`,
        headers: { 'x-rapidapi-key': '1ba5e898c5msh251a89f878cf1f1p1a0e25jsn855b16cde86d' }
    });


    const res = await instance.get();
    if (res.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}