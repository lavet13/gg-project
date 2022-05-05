import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

export default function slider() {
    tns({
        container: '.slider',
        items: 1,
        slideBy: 'page',
        autoplay: true
    });

    const prev = document.querySelector('[data-controls="prev"]'),
          next = document.querySelector('[data-controls="next"]');

    prev.innerHTML = "&#8882;";
    next.innerHTML = "&#8883;";

    prev.classList.add('tns__arrow');
    next.classList.add('tns__arrow');

    


    // const cloneArrows = next.parentElement.cloneNode(true); // You call the cloneNode() method on the element you want to copy. If you want to also copy elements nested inside it, pass in true as an argument.

    // next.parentElement.after(cloneArrows);

    // https://gomakethings.com/how-to-copy-or-clone-an-element-with-vanilla-js/#:~:text=You%20call%20the%20cloneNode(),of%20it%20var%20clone%20%3D%20elem.

    // prev.parentElement.insertAdjacentElement('beforebegin', prev);
    // next.parentElement.insertAdjacentElement('beforebegin', next);
    
    // previousElementSibling
    // nextElementSibling
}