import { addClass, removeClass } from './utils-class';

const slider = document.querySelector('.slider');
const preview = slider.querySelector('.preview');
const imagePreview = preview.querySelector('img');
const thumbnail = slider.querySelector('.thumbnail');
const itemThumbnail = thumbnail.getElementsByClassName('item');

for (let i = 0; i < itemThumbnail.length; i++) {
  let item = itemThumbnail[i];
  item.addEventListener('click', function () {
    const dataImage = this.getAttribute('data-img');
    imagePreview.setAttribute('src', dataImage);

    for (let j = 0; j < itemThumbnail.length; j++) {
      const element = itemThumbnail[j];
      removeClass(element, 'selected');
    }

    addClass(this, 'selected');
  });
}
