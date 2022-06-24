import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  slider();

  const navButton = document.querySelector('.nav__button--1'),
    nav = document.querySelector('.nav'),
    modal = document.querySelector('.nav__modal'),
    overlay = document.querySelector('.overlay');

  const openModal = function (e) {
    e.preventDefault();

    if (modal.classList.contains('hidden')) {
      document.body.style.overflow = 'hidden';

      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
      nav.classList.add('nav--active');
      this.childNodes.forEach(item => {
        if (item.nodeName === 'SPAN') {
          item.classList.add('btn--active');
        }
      });
    }
  };

  const closeModal = function () {
    if (!modal.classList.contains('hidden')) {
      document.body.style.overflow = '';

      modal.classList.add('hidden');
      overlay.classList.add('hidden');
      nav.classList.remove('nav--active');
      navButton.childNodes.forEach(item => {
        if (item.nodeName === 'SPAN') {
          item.classList.remove('btn--active');
        }
      });
    }
  };

  navButton.addEventListener('click', openModal);
  overlay.addEventListener('click', closeModal);

  // ESCAPE
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
