const headerCart = document.getElementById('header-cart');
const dataCart = localStorage.getItem('cart');

if (dataCart <= 0) headerCart.classList.remove('cart-filled');
