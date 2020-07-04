const dateToday = () => {
  const dateToday = new Date();
  const year = dateToday.getFullYear();
  let month = dateToday.getMonth() + 1;
  let day = dateToday.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
};

export default dateToday;
