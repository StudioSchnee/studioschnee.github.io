$(function () {
    $("div.panel").hide();
    $(".menu").click(function () {
        $(this).toggleClass("menuOpen").next().slideToggle();
    });
})
