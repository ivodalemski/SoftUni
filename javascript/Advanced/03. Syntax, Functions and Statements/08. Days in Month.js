function days(month, year) {
  let newDate = new Date(year, month, 0).getDate();
  console.log(newDate);
}
days(2, 2021);
