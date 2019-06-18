

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

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 2000) {
        $(".lacmatem").removeClass("lacmatem").addClass("lacmatem1");
    } else {
        $(".lacmatem1").removeClass("lacmatem1").addClass("lacmatem");
    }
});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 4300) {
        $(".content").removeClass("content").addClass("content1");
    } else {
        $(".content1").removeClass("content1").addClass("content");
    }
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 5500) {
        $(".mes6").removeClass("mes6").addClass("mes6-scroll");
    } if (scroll <= 5000) {
        $(".mes6-scroll").removeClass("mes6-scroll").addClass("mes6");
    }
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 5660) {
        $(".mes7").removeClass("mes7").addClass("mes7-scroll");
    } if (scroll < 5500) {
        $(".mes7-scroll").removeClass("mes7-scroll").addClass("mes7");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 5900) {
        $(".tinnhan1").removeClass("tinnhan1").addClass("tinnhan11");
    } if (scroll < 5900) {
        $(".tinnhan11").removeClass("tinnhan11").addClass("tinnhan1");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 6100) {
        $(".tinnhan2").removeClass("tinnhan2").addClass("tinnhan21");
    } if (scroll < 6100) {
        $(".tinnhan21").removeClass("tinnhan21").addClass("tinnhan2");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 6469) {
        $(".queto3").removeClass("queto3").addClass("queto31");
    } if (scroll < 6469) {
        $(".queto31").removeClass("queto31").addClass("queto3");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 7264) {
        $(".anh2").removeClass("anh2").addClass("anh21");
    } if (scroll < 7264) {
        $(".anh21").removeClass("anh21").addClass("anh2");
    }
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 7400) {
        $(".anh3").removeClass("anh3").addClass("anh31");
    } if (scroll < 7400) {
        $(".anh31").removeClass("anh31").addClass("anh3");
    }
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 8032) {
        $(".content4").removeClass("content4").addClass("content41");
    } if (scroll < 8032) {
        $(".content41").removeClass("content41").addClass("content4");
    }
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 8400) {
        $(".anh4").removeClass("anh4").addClass("anh41");
    } if (scroll < 8400) {
        $(".anh41").removeClass("anh41").addClass("anh4");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 8685) {
        $(".tinnhan3").removeClass("tinnhan3").addClass("tinnhan31");
    } if (scroll < 8685) {
        $(".tinnhan31").removeClass("tinnhan31").addClass("tinnhan3");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 8685) {
        $(".tinnhan4").removeClass("tinnhan4").addClass("tinnhan41");
    } if (scroll < 8685) {
        $(".tinnhan41").removeClass("tinnhan41").addClass("tinnhan4");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 9200) {
        $(".tinnhan5").removeClass("tinnhan5").addClass("tinnhan51");
    } if (scroll < 9200) {
        $(".tinnhan51").removeClass("tinnhan51").addClass("tinnhan5");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10408) {
        $(".tinnhan6").removeClass("tinnhan6").addClass("tinnhan61");
    } if (scroll < 10408) {
        $(".tinnhan61").removeClass("tinnhan61").addClass("tinnhan6");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10993) {
        $(".ten1").removeClass("ten1").addClass("ten11");
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10993) {
        $(".ten2").removeClass("ten2").addClass("ten21");
    }
});

