import tinySlider from './modules/slider';
import mySlider from './modules/mySlider';
import modal from './modules/modal';
import checkboxes from './modules/checkboxes';

window.addEventListener('DOMContentLoaded', () => {
  tinySlider({
    selector: '.slider',
  });

  mySlider({
    container: '.articles',
    wrapper: '.articles__wrapper',
    field: '.articles__wrapper-inner',
    slide: '.articles__slide',
    next: '.articles__prev-btn',
    prev: '.articles__next-btn',
  });

  modal();

  checkboxes();
});
