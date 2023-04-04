const axios = require("axios");

const { serverUrl } = require("./config");

// const headers = () => {
//   const token = localStorage.getItem("jwtToken");
//   return {
//     authorization: `Bearer ${token}`,
//   };
// };

const getTicketPrice = () => {
  return axios.get(`${serverUrl}/price`);
};

const bookTicket = (data) => {
  return axios.post(`${serverUrl}/ticket`, data);
};

const getTicket = (ticketId) => {
  return axios.get(`${serverUrl}/ticket/${ticketId}`);
};

const getSite = (siteId) => {
  return axios.get(`${serverUrl}/site/${siteId}`);
};

const getAllSites = (city, location) => {
  if (city) {
    if (location) {
      return axios.get(
        `${serverUrl}/site?city=${city}&lat=${location.lat}&long=${location.long}`
      );
    }
    return axios.get(`${serverUrl}/site?city=${city}`);
  }
  return axios.get(`${serverUrl}/site`);
};

const getCityByLocation = (location) => {
  return axios.get(
    `${serverUrl}/city?lat=${location.lat}&long=${location.long}`
  );
};

const getCities = () => {
  return axios.get(`${serverUrl}/cities`);
};

module.exports = {
  getTicketPrice,
  bookTicket,
  getTicket,
  getSite,
  getAllSites,
  getCities,
  getCityByLocation,
};
