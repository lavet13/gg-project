import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

window.addEventListener("DOMContentLoaded", () => {

    tns({
        container: '.slider',
        items: 1,
        slideBy: 'page',
        autoplay: true
    });

});