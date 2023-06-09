const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

// const couponsObj = {
//   'Black': 30,
//   'Red': 25,
//   'Gold': 15,
// };

const couponsList = [];
couponsList.push({
  name: 'Black',
  discount: 30,
});
couponsList.push({
  name: 'Red',
  discount: 25,
});
couponsList.push({
  name: 'Gold',
  discount: 15,
});

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = 'por favor llena los campos';
    return;
  }
  
  let discount;

  function isCouponInArray(couponElement) {
    return couponElement.name == coupon;
  }
  
  const couponInArray = couponsList.find(isCouponInArray); 

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = 'El cupón no es válido';
    return;
  }

  console.log({
    coupon, 
    discount,
    couponInArray,
    couponsList,
  });
  
  // if (couponsObj[coupon]) {
  //   discount = couponsObj[coupon];
  // } else {
    // pResult.innerText = 'El cupón no es válido';
    // return;
  // }
  
  // switch (coupon) {
  //   case 'Black':
  //     discount = 30;
  //     break;
  //   case 'no_le_digas_a_nadie':
  //     discount = 25;
  //     break;
  //   default:
      // pResult.innerText = 'El cupón no es válido';
      // return;
  // }
  
  // if (coupon == 'Black') {
  //   discount = 30;
  // } else if (coupon == 'no_le_digas_a_nadie') {
  //   discount = 25;
  // } else {
  // pResult.innerText = 'El cupón no es válido';
  // return;
  // }
  
  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}