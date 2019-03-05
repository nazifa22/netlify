$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
            $('header > nav').removeClass('bg-transparent');
        }
        else {
            $('header > nav').addClass('bg-transparent');
        }
    });
});


$('body').scrollspy({ target: '#navbar-example', offset 100});

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
});