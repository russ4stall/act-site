$(document).ready(function () {

    $("#nav-toggle").click(function () {
        $(this).toggleClass('open');
        $("#main-nav ul").slideToggle();
        
        $(".top-nav").delay('0').queue(function (next) {
            $(this).toggleClass('open');
            next();
        });
    });
});