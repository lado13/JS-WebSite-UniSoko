
let s = true;
$('.search').click(function(){
    let inp = $('.inp');
    let slide = $('.slider');
    let serch = $('.search');
    
    if (s) {
        inp.animate({width: '575px'},500)
        slide.css('display','block')
        serch.css('margin-left','0') 
    }else{
        inp.animate({width: '50px'},500)
        slide.css('display','none')
        serch.css('margin-left','0')
    }
    s = !s;
});


$('.event').click(function(){
    $('.lorem').css('opacity','1')
});

$('.back').click(function(){
    $('.lorem').css('opacity','0')
});

$('.event2').click(function(){
    $('.lorem2').css('opacity','1')
});

$('.back2').click(function(){
    $('.lorem2').css('opacity','0')
});




let nav = document.querySelector('.fixed');
let lastScroll = 0;

window.addEventListener('scroll', function(){
    let scroll = this.scrollY;
    if (scroll > lastScroll) {
        nav.style.opacity = '0'
        nav.style.transition = 'all .3s ease-in-out'
    }else{
        nav.style.opacity = '1' 
        nav.style.transition = 'all .3s ease-in-out'   
    }
    lastScroll = scroll;
});







