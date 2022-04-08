const year = new Date().getFullYear();
const years = Array.from(new Array(7), (val, index) => index + 1 + year);
const months = Array.from(new Array(12), (val, index) => index + 1);

export {
  years,
  months
}