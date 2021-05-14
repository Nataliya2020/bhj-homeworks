'use strict'

const products = [...document.querySelectorAll('.product')];
const cartProducts = document.querySelector('.cart__products');
const cart = document.querySelector('.cart');

cart.style = 'display: none';

for (let product of products) {
  product.addEventListener('click', listenToProduct);
}

function listenToProduct(event) {
  const target = event.target;

  if (event.target.classList.contains('product__add')) {
    addProduct(target);
  }

  if (event.target.classList.contains('product__quantity-control_dec')) {
    decrease(target);
  }

  if (event.target.classList.contains('product__quantity-control_inc')) {
    increase(target);
  }
}

function addProduct(target) {
  const idProduct = target.closest('.product').dataset.id;

  if (cartProducts.children.length === 0) {
    cart.style = 'display: block';
    addProductInCart(target, idProduct);
  } else {
    checkCart(target);
  }
}

function decrease(target) {
  let incProd = target.closest('.product__quantity').querySelector('.product__quantity-value');
  incProd.textContent = +incProd.textContent - 1;
  if (incProd.textContent <= 0) {
    incProd.textContent = 1;
  }
}

function increase(target) {
  let incProd = target.closest('.product__quantity').querySelector('.product__quantity-value');
  incProd.textContent = +incProd.textContent + 1;
}

function checkCart(target) {
  const idProduct = target.closest('.product').dataset.id;

  const sameIdProduct = [...cartProducts.children].find((productInCart) => productInCart.dataset.id === idProduct);

  if (sameIdProduct) {
    const modifiedCount = target.closest('.product__quantity').querySelector('.product__quantity-value').textContent;
    let changeCountICart = sameIdProduct.querySelector('.cart__product-count');
    changeCountICart.textContent = +changeCountICart.textContent + +modifiedCount;
  } else {
    addProductInCart(target, idProduct);
  }
}

function addProductInCart(target, idProduct) {
  const imgSrc = target.closest('.product').querySelector('img').src;
  let productCount = +target.closest('.product__quantity').querySelector('.product__quantity-value').textContent;

  cartProducts.innerHTML += `
        <div class="cart__product" data-id="${idProduct}">
        <img class="cart__product-image" src="${imgSrc}">
        <div class="cart__product-count">${productCount}</div>`
}


