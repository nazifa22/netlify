$('body').scrollspy({ target: '#navbar-example', offset 100});

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
});

wow = new WOW(
    {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
    }
);
wow.init();
document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
};