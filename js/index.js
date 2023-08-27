
$(document).ready(function() {
    $('.face__form-field').focus( function() {
        $(this).addClass('face__form-field_focus')
    }).blur(function () {
        if ( $(this).val() == "") {
            $(this).removeClass('face__form-field_focus')
        }
    })

    Start();

    function Start() {
        var h = 0;
        var m = 12;
        var s = 0;

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;
                } else {
                    if (h != 0) {
                        h = h - 1;
                        m = 59;
                        s = 59;
                    } else {
                        return
                    }
                }
            }
            $('.face__count-time:first-child span:first-child').text(h);
            $('.face__count-time:nth-child(2) span:first-child').text(m);
            $('.face__count-time:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000)
    }

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        responsive : {
            0 : {
                nav: false,
            },
            480 : {

                nav: true,
            }
        }
    })

    var wow = new WOW
        ({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            scrollContainer: null
        }
    );
    wow.init();
});
