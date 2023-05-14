///////////////////////display function/////////////////////////
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
        $('.detals_box').css('background-color', '#ffffff');
        $('nav').css('background', ' linear-gradient(540deg, #fc0b0b28 , #FFFFFF )');
        $('.liveSearch').css('background-color', '#f3f3f3');
    }else{
        $('body').css('background-color','#161616');
        $('body').css('color','white');
        $('.change_bg').css('margin-left','40px');
        $('.header_box').css('background-color',' black');
        $('*').css('color','white');
        $('.view_more_btn').css('color','black');
        $('.nav-link').css('color','black');
        $('.block').css('background-color','#161616');
        $('.block').css('color','#ffffff');
        $('footer').css('background-color','rgb(45 45 45)');
        $('.row').css('color','#ffffff');
        $('.detals_box').css('background-color', '#161616');
        $('nav').css('background', 'rgb(45 45 45)');
        $('nav a').css('color', '#ffffff');
        $('.inp').css('color', '#000000');
        $('.liveSearch').css('background-color', 'rgb(154, 154, 154)');
        
    }
};
