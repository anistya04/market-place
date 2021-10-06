import { addClass } from './utils-class';
const data = {
  'complete-name': '',
  'email-address': '',
  address: '',
  'phone-number': '',
  courier: '',
  payment: '',
};

const shippingDetail = document.querySelectorAll(
  '#shipping-detail input[data-input]'
);
for (let i = 0; i < shippingDetail.length; i++) {
  const element = shippingDetail[i];
  element.addEventListener('change', function (e) {
    data[e.target.id] = e.target.value;
    console.log(data);
    check();
  });
}

const buttonCourierPayment = document.querySelectorAll(
  '#shipping-detail button[data-name]'
);
for (let i = 0; i < buttonCourierPayment.length; i++) {
  const element = buttonCourierPayment[i];

  element.addEventListener('click', function () {
    let value = this.attributes['data-value'].value;
    let name = this.attributes['data-name'].value;

    data[name] = value;
    check();
  });
}
function check() {
  const find = Object.values(data).filter((item) => item === '');
  if (find.length === 0)
    document.querySelector(
      "#shipping-detail button[type='submit']"
    ).disabled = false;
  else
    document.querySelector(
      "#shipping-detail button[type='submit']"
    ).disabled = true;
}
