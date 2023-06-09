const btn = document.querySelector('#calcular');
const price = document.querySelector('#price');
const discount = document.querySelector('#discount');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  const priceValue = price.value;
  const discountValue = discount.value;
  const newPrice = (priceValue *(100 - discountValue)) / 100;

  if(!priceValue || !discountValue){
    pResult.innerText = 'Ingresa un precio y un descuento';
    return;
  }
  if(discountValue > 100){
    pResult.innerText = 'El descuento es mayor a 100';
    return;
  }

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}