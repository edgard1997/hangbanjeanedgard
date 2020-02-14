$('.js-input').keyup(function () {
    if ($(this).val()) {
        $(this).addClass('not-empty');
    } else {
        $(this).removeClass('not-empty');
    }
});

(function ($) {
    
    $('.accordion a').click(function (j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

function bounceEffecttwt() {

    if (Bounce.isSupported() == true) {
        var bounce = new Bounce();

        bounce
            .translate({
                from: { x: -3, y: 0 },
                to: { x: 0, y: 0 },
                duration: 600,
                stiffness: 4
            })
            .scale({
                from: { x: 1, y: 1 },
                to: { x: 0.1, y: 2.3 },
                easing: "sway",
                duration: 800,
                delay: 65,
                stiffness: 2
            })
            .scale({
                from: { x: 1, y: 1 },
                to: { x: 5, y: 1 },
                easing: "sway",
                duration: 300,
                delay: 30,
            })
            .applyTo(document.querySelectorAll(".fa-twitter"));
    }
}

function bounceEffectlink() {

    if (Bounce.isSupported() == true) {
        var bounce = new Bounce();

        bounce
            .translate({
                from: { x: -3, y: 0 },
                to: { x: 0, y: 0 },
                duration: 600,
                stiffness: 4
            })
            .scale({
                from: { x: 1, y: 1 },
                to: { x: 0.1, y: 2.3 },
                easing: "sway",
                duration: 800,
                delay: 65,
                stiffness: 2
            })
            .scale({
                from: { x: 1, y: 1 },
                to: { x: 5, y: 1 },
                easing: "sway",
                duration: 300,
                delay: 30,
            })
            .applyTo(document.querySelectorAll(".fa-linkedin-in"));
    }
}

function bounceEffectInsta() {

    if (Bounce.isSupported() == true) {
        var bounce = new Bounce();

        bounce
            .translate({
                from: { x: -3, y: 0 },
                to: { x: 0, y: 0 },
                duration: 600,
                stiffness: 4
            })
            .scale({
                from: { x: 1, y: 1 },
                to: { x: 0.1, y: 2.3 },
                easing: "sway",
                duration: 800,
                delay: 65,
                stiffness: 2
            })
            .scale({
                from: { x: 1, y: 1 },
                to: { x: 5, y: 1 },
                easing: "sway",
                duration: 300,
                delay: 30,
            })
            .applyTo(document.querySelectorAll(".fa-instagram"));
    }
}

function bounceEffectPint() {

    if (Bounce.isSupported() == true) {
        var bounce = new Bounce();

        bounce
            .translate({
                from: { x: -3, y: 0 },
                to: { x: 0, y: 0 },
                duration: 600,
                stiffness: 4
            })
            .scale({
                from: { x: 1, y: 1 },
                to: { x: 0.1, y: 2.3 },
                easing: "sway",
                duration: 800,
                delay: 65,
                stiffness: 2
            })
            .scale({
                from: { x: 1, y: 1 },
                to: { x: 5, y: 1 },
                easing: "sway",
                duration: 300,
                delay: 30,
            })
            .applyTo(document.querySelectorAll(".fa-pinterest"));
    }
}


function bounceEffectFab() {

    if (Bounce.isSupported() == true) {
        var bounce = new Bounce();

        bounce
            .translate({
                from: { x: -3, y: 0 },
                to: { x: 0, y: 0 },
                duration: 600,
                stiffness: 4
            })
            .scale({
                from: { x: 1, y: 1 },
                to: { x: 0.1, y: 2.3 },
                easing: "sway",
                duration: 800,
                delay: 65,
                stiffness: 2
            })
            .scale({
                from: { x: 1, y: 1 },
                to: { x: 5, y: 1 },
                easing: "sway",
                duration: 300,
                delay: 30,
            })
            .applyTo(document.querySelectorAll(".fa-facebook-square"));
    }
}


$(window).scroll(function () {

    var x = $('#IphoneMock1').attr('anim');

    if (x === "succeed") {

        return false;

    }


    if (isElementVisible($('#IphoneMock1'))) {

        if (Bounce.isSupported() == true) {
            var bounce = new Bounce();

            bounce.translate({
                    from: { x: 600, y: 0 },
                    to: { x: 0, y: 0 },
                    duration: 3000,
                    stiffness: 3,
                    delay: 50
                }).applyTo(document.querySelectorAll(".textRight"));
            $(".textRight").fadeIn(100);

            //var xl = document.getElementById("text2");
            //xl.setAttribute("anim", "succeed");

        } else {

            $(".text").show();
        }

    }

});

$(window).scroll(function () {

    var x = $('#IphoneMock1').attr('anim');

    if (x === "succeed") {

        return false;

    }


    if (isElementVisible($('#IphoneMock1'))) {

        if (Bounce.isSupported() == true) {
            var bounce = new Bounce();

           
            bounce
                .translate({
                    from: { x: -600, y: 0 },
                    to: { x: 0, y: 0 },
                    duration: 3000,
                    stiffness: 3,
                    delay: 50
                })

                .applyTo(document.querySelectorAll(".textLeft"));
            $(".textLeft").fadeIn(100);

            var xl = document.getElementById("IphoneMock1");
            xl.setAttribute("anim", "succeed");

        } else {

            $(".text").show();
        }

    }

});


function isElementVisible(elem) {
    var visibleTop = $(window).scrollTop();
    var visibleBottom = visibleTop + $(window).height();

    return ((elem.offset().top + elem.height()) <= visibleBottom);
}