import slider from './modules/slider';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  slider({
    selector: '.slider',
  });

  slider({
    selector: '.other-slider',
  });

  modal();

  const suites = document.querySelector('.product-suites');

  suites.addEventListener('click', function (e) {
    console.log(e.target);

    if (e.target.classList.contains('product-suite')) {
      console.log('clicked');
      const input = suites.querySelector('.product-suite__radio-input');
      if (input.checked) {
        input.checked = false;
      } else {
        input.checked = true;
      }
    }
  });
});
