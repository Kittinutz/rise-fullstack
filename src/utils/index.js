import numeral from "numeral";

export const formatPrice = (number) => {
  return numeral(number).format("0,0[.]0฿");
};
