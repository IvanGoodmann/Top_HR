$(document).ready(function () {

    $('#fullpage').fullpage({
        sectionSelector: '.vertical-scrolling',
        slideSelector: '.horizontal-scrolling',
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        touchSensitivity: 10,
        anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixSection'],
        menu: '#menu'
    });

    new WOW().init();

    $(".typed-browser-box").typed({
        strings: ["lorem", "inpus", "test"],
        typeSpeed: 200,
        loop: true
    });

});
