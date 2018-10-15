$(document).ready(function() {
    $(window).scroll(function() {
        var barra = $(window).scrollTop();
        var mov1 = barra * 0.10;
        $('#move').css({
            'margin-top': '+' + mov1 + 'px',
               'margin-left': '+' + mov1 + 'px',
            'border-radius': '+' + mov1 + 'px',
            'width': '+' + mov1 + 'px',
              'height':'+'+ mov1 + 'px',
        });
    })

});


$(document).ready(function () {
    $(window).scroll(function () {
        var barra1 = $(window).scrollTop();
        var mov2 = barra1 * 0.2;
        $('#movegreen').css({
            'margin-top': '+' + mov2 + 'px',
            'margin-left': '+' + mov2 + 'px',
            'border-radius': '+' + mov2 + 'px',
            'width': '+' + mov2 + 'px',
            'height': '+' + mov2 + 'px',
        });
    })

});

$(document).ready(function () {
    $(window).scroll(function () {
        var barra2 = $(window).scrollTop();
        var mov3 = barra2 * 0.40;
        $('#moveorange').css({
            'margin-top': '+' + mov3 + 'px',
            'margin-left': '+' + mov3 + 'px',
            'border-radius': '+' + mov3 + 'px',
            'width': '+' + mov3 + 'px',
            'height': '+' + mov3 + 'px',
        });
    })

});

$(document).ready(function () {
    $(window).scroll(function () {
        var bar = $(window).scrollTop();
        var move4 = bar * 0.5;
        $('#moveblue').css({
            'margin-top': '+' + mov4 + 'px',
        });
    })
});