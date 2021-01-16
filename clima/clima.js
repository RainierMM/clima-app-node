const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&apikey=3e41e8a19ee1bc7b0e37d3809fce1808&units=metric`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
