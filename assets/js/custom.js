$('body').scrollspy({ target: '#navbar-example', offset 100});

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
});