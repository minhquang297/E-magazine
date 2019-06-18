

$(document).ready(function () {
    $(window).scroll(function (event) {
        var pos_body = $('html,body').scrollTop();
        console.log(pos_body);

    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".mes1").removeClass("mes1").addClass("mes1-scroll");
    } if (scroll <= 250) {
        $(".mes1-scroll").removeClass("mes1-scroll").addClass("mes1");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        $(".mes2").removeClass("mes2").addClass("mes2-scroll");
    } if (scroll <= 300) {
        $(".mes2-scroll").removeClass("mes2-scroll").addClass("mes2");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 600) {
        $(".photo").removeClass("photo").addClass("photo-scale1");

    } if (scroll >= 700) {
        $(".photo-scale1").removeClass("photo-scale1").addClass("photo-scale2");

    } if (scroll < 700) {
        $(".photo-scale2").removeClass("photo-scale2").addClass("photo-scale1");

    } if (scroll < 600) {
        $(".photo-scale1").removeClass("photo-scale1").addClass("photo");

    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 3700) {
        $(".mes3").removeClass("mes3").addClass("mes3-scroll");
    } if (scroll <= 3340) {
        $(".mes3-scroll").removeClass("mes3-scroll").addClass("mes3");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 3800) {
        $(".mes4").removeClass("mes4").addClass("mes4-scroll");
    } if (scroll <= 3580) {
        $(".mes4-scroll").removeClass("mes4-scroll").addClass("mes4");
    }
}); $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 3900) {
        $(".mes5").removeClass("mes5").addClass("mes5-scroll");
    } if (scroll <= 3650) {
        $(".mes5-scroll").removeClass("mes5-scroll").addClass("mes5");
    }
});