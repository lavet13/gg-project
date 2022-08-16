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

  // https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation
  const suites = document.querySelector('.product-suites');

  suites.addEventListener('click', function (e) {
    console.log(e.currentTarget); // suites, also we can use "this" keyword, it would be the same scenario

    let element = e.target; // however it needs to be in a separate variable

    while (element) {
      if (element.matches('.product-suite')) {
        const input = element.querySelector('.product-suite__radio-input');

        if (input.checked) {
          input.checked = false;
        } else {
          input.checked = true;
        }

        element = null;
      } else {
        if (element === this) {
          // we're reached the suites
          element = null;
        } else {
          element = element.parentNode;
        }
      }
    }
  });
});
