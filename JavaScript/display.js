
DisplayMode();
$('.change_bg').click(function(){

    let mode = localStorage.getItem('mode');

    if (mode == 'dark') {
        localStorage.setItem('mode','light');
        DisplayMode();
    }else{
        localStorage.setItem('mode','dark');
        DisplayMode();
    }
});

function DisplayMode() {

    let mode = localStorage.getItem('mode');
    
    if (mode == 'light') {
        $('body').css('background-color','white');
        $('body').css('color','black');
        $('.change_bg').css('margin-left','5px');
        $('.header_box').css('background-color','  #EAF6FF');
        $('*').css('color','black');
        $('.view_more_btn').css('color','black');
        $('.detals').css('background-color','#FAFBFC');
        $('.block').css('background-color','#ffffff');
        $('.block').css('color','black');
        $('footer').css('background-color','#EAF6FF');
    }else{
        $('body').css('background-color','black');
        $('body').css('color','white');
        $('.change_bg').css('margin-left','40px');
        $('.header_box').css('background-color',' black');
        $('*').css('color','white');
        $('.view_more_btn').css('color','black');
        $('.nav-link').css('color','black');
        $('.detals').css('background-color','black');
        $('.block').css('background-color','#000000');
        $('.block').css('color','#ffffff');
        $('footer').css('background-color','#000000');
        $('.row').css('color','#ffffff');
    }
};
