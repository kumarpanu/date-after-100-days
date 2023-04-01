const date = require("date-fns/addDays");

const afterAdd = (days) => {
  const result = date(new Date(2020, 7, 22), days);
  const newDate = `${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`;
  return newDate;
};

module.exports = afterAdd;
