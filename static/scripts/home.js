// var slider = tns({
//     "container": ".home-slider",
//     "fixedWidth": 400,
//     "mode": "carousel",
//     "axis": "horizontal",
//     "items": 1,
//     "slideBy": 1,
//     "controls": true,
//     "nav": false,
//     "mouseDrag": true,
//     "swipeAngle": false,
//     "loop": true
// });

jQuery(function ($) {
    $('.home-slider').slick({
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        draggable: true,
        infinite: true,
        speed: 300,
        variableWidth: true
    });
});