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
});
