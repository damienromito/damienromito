var app = function () {
    "use strict";
    var headerFixed, onefeatPosition, natumPosition, tweetPosition, boilerPosition, bnpPosition, ocoPosition, arlesPosition, the_id;
    var init = function () {

        resetPosition();
        $(function () {
            $.stellar({
                horizontalScrolling: false,
                verticalOffset: 0
            })
        });
        $(window).resize(function () {
            resetPosition()
        });
        $("#fake_header .about, #fake_header .what").click(function (e) {
            e.preventDefault();
            the_id = $(this).attr("href");
            $('.collapsible.description').addClass('open');
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $(the_id).offset().top
                }, '500');
                resetPosition()
            }, 500);
            return false
        });
        $('a[href^="#"]').click(function () {
            var the_id = $(this).attr("href");
            if (the_id == "#aboutme" || the_id == "#whatiknow") return;
            $('html, body').animate({
                scrollTop: $(the_id).offset().top - 70
            }, '500');
            return false
        });
        $('.collapsible').click(function () {
            $(this).toggleClass('open');
            setTimeout(function () {
                resetPosition()
            }, 500)
        });
        $(document).scroll(function () {
            var scroll = $(document).scrollTop();
            var projectsPosition = $("#projects").position();
            if (scroll < projectsPosition.top) {
                if (headerFixed == true) {
                    $("#projects").attr('class', '');
                    $("#header .active").removeClass("active");
                    headerFixed = false
                }
            } else {
                headerFixed = true;
                $("#projects").addClass("fixed");
                scroll = scroll + 100;
                if (scroll > bnpPosition.top) {
                    $("#projects").attr("class", "fixed bnp")
                } else if (scroll > tweetPosition.top) {
                    $("#projects").attr("class", "fixed tweet")
                } else if (scroll > boilerPosition.top) {
                    $("#projects").attr("class", "fixed boiler")
                } else if (scroll > arlesPosition.top) {
                    $("#projects").attr("class", "fixed arles")
                } else if (scroll > ocoPosition.top) {
                    $("#projects").attr("class", "fixed oco")
                } else if (scroll > natumPosition.top) {
                    $("#projects").attr("class", "fixed natum")
                } else if (scroll > onefeatPosition.top) {
                    $("#projects").attr("class", "fixed onefeat")
                }
            }
        });
    }
    var resetPosition = function () {
        $('#projects .photo').height((window.innerWidth / 1.6));
        $.stellar('refresh');
        onefeatPosition = $("#onefeat").position();
        natumPosition = $("#natum").position();
        arlesPosition = $("#arles").position();
        tweetPosition = $("#tweet").position();
        ocoPosition = $("#oco").position();
        bnpPosition = $("#bnp").position();
        boilerPosition = $("#boiler").position()
    }

    return {
        init: init
    }
}();