const capitilizeCityName = (city) => {
  return city
    .split("-")
    .map((c) => {
      return c.charAt(0).toUpperCase() + c.slice(1);
    })
    .join(" ");
};

module.exports = capitilizeCityName;
