$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#gotop').fadeIn();
        }
        else{
            $('#gotop').fadeOut();
        }
    });
    $('#gotop').click(function(){
       $('html,body').animate({
           scrollTop : 0,
       },1000) 
    });
});