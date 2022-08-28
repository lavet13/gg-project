export default function mySlider({ wrapper, field, slide, next, prev }) {
  try {
    const slides = document.querySelectorAll(slide),
      slideWrapper = document.querySelector(wrapper),
      slideField = document.querySelector(field),
      nextBtn = document.querySelector(next),
      prevBtn = document.querySelector(prev);

    const wrapperWidth = parseInt(window.getComputedStyle(slideWrapper).width);

    const lastStop = function (wrapperWidth, slides) {
      console.log(
        Math.round(wrapperWidth / slides[0].getBoundingClientRect().width)
      ); // 3
    };

    slideWrapper.style.width =
      (slides[0].getBoundingClientRect().width * lastStop(wrapperWidth, slides)) + ;

    const slidesWidth = Math.round(slides[0].getBoundingClientRect().width);
    const fieldWidth =
      (wrapperWidth * slides.length) / computeWidth(wrapperWidth, slidesWidth);

    console.log(slidesWidth, wrapperWidth, fieldWidth, slides.length);

    let offset = 0;

    nextBtn.addEventListener('click', function (e) {
      e.preventDefault();

      console.log('nextBtn click');

      if (offset > fieldWidth - wrapperWidth) {
        offset = 0;
        slideField.style.transform = 'translate(0)';
      } else {
        offset += wrapperWidth;
      }

      console.log(offset);

      slideField.style.transform = `translate(${-offset}px)`;
    });

    prevBtn.addEventListener('click', function (e) {
      e.preventDefault();

      console.log('prevBtn click');

      if (offset < wrapperWidth) {
        offset = 0;
        while (offset < fieldWidth) {
          offset += wrapperWidth;
        }

        offset -= wrapperWidth;
        slideField.style.transform = `translate(${-offset}px)`;
      } else {
        offset -= wrapperWidth;
      }

      console.log(offset);

      slideField.style.transform = `translate(${-offset}px)`;
    });
  } catch (e) {
    console.log(e.message);
  }
}

const computeWidth = function (wrapperWidth, slidesWidth) {
  return Math.round(wrapperWidth / slidesWidth);
};
