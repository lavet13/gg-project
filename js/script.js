import tinySlider from './modules/slider';
import mySlider from './modules/mySlider';
import modal from './modules/modal';
import checkboxes from './modules/checkboxes';

window.addEventListener('DOMContentLoaded', () => {
  tinySlider({
    selector: '.slider',
  });

  // https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
  mySlider({
    wrapper: '.articles__wrapper',
    field: '.articles__wrapper-inner',
    slide: '.articles__slide',
    next: '.articles__next-btn',
    prev: '.articles__prev-btn',
  });

  modal();

  checkboxes();
});
