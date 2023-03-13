export const discount = (num) => {
  let discountPrice = Math.floor((num * 20) / 100);
  let finalPrice = num - discountPrice;
  return finalPrice;
};
export const totalDiscount = (num) => {
  let discountPrice = Math.floor((num * 10) / 100);
  let finalPrice = num - discountPrice;
  return { discountPrice, finalPrice };
};
