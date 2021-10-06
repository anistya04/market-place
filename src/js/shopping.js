import { addClass, removeClass } from './utils-class';
const shoppingCart = document?.getElementById('shopping-cart');
const buttons = shoppingCart?.querySelectorAll('button[data-delete]');
let cart = ['1', '2', '3', '4'];
localStorage.setItem('cart', JSON.stringify(cart));
if (shoppingCart) {
  for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    const headerCart = document.getElementById('header-cart');
    const emptyCart = document.getElementById('empty-cart');
    button.addEventListener('click', function () {
      let id = this.attributes['data-delete'].value;
      shoppingCart.querySelector(`div[data-row='${id}']`).remove();

      const dataCart = JSON.parse(localStorage.getItem('cart'));

      const dataId = dataCart.indexOf(id);
      const newDataCart = dataCart.splice(dataId, 1);
      // console.log(dataId);
      console.log(dataCart);
      console.log(newDataCart);

      if (dataCart) localStorage.setItem('cart', JSON.stringify(dataCart));
      if (dataCart.length === 0) {
        removeClass(headerCart, 'cart-filled');
        removeClass(emptyCart, 'hidden');
      }
    });
  }
}
