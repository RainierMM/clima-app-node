const axios = require("axios");

const getLugarLatLng = async (dir) => {
  const encodedUrl = encodeURI(dir);

  const instance = axios.create({
    baseURL: `http://api.weatherapi.com/v1/current.json?key=46bbe146be4848fb81470845211601&q=${encodedUrl}`,
    headers: { Key: "46bbe146be4848fb81470845211601" },
  });

  const resp = await instance.get();

  if (resp.data.location.length === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.location;
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLng,
};
