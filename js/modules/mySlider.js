export default function mySlider({
  container,
  wrapper,
  field,
  slide,
  next,
  prev,
}) {
  try {
    const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      slideWrapper = document.querySelector(wrapper),
      slideField = document.querySelector(field),
      nextBtn = document.querySelector(next),
      prevBtn = document.querySelector(prev);

    const wrapperWidth = parseInt(window.getComputedStyle(slideWrapper).width);
    const slideWidth = slides[0].getBoundingClientRect().width;

    let offset = 0;

    const computeWidth = function (width) {};

    slideField.style.width = computeWidth(wrapperWidth);

    console.log(`slideWrapper: ${wrapperWidth}`);
    console.log(wrapperWidth * slides.length - 1);

    nextBtn.addEventListener('click', function (e) {
      e.preventDefault();

      console.log('click');

      if (offset > wrapperWidth * slides.length - 1) {
        offset = 0;
        slideField.style.transform = 'translate(0)';
      } else {
        offset += wrapperWidth;
      }

      console.log(offset);

      slideField.style.transform = `translate(${-offset}px)`;
    });
  } catch (e) {
    console.log(e.message);
  }
}
