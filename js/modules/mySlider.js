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

    const width = window.getComputedStyle(slideWrapper).width;

    const offset = 0;

    nextBtn.addEventListener('click', function (e) {
      e.preventDefault();
    });
  } catch (e) {
    console.log(e.message);
  }
}
