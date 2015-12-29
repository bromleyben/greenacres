angular.module('gaApp', ['ngRoute', 'ngAnimate']).controller('index', function(){
    $(document).ready(function(){
            var index = this;
            $('#ga-logo').addClass('animated fadeInLeft');
            setTimeout(function(){$('#ga-welcome').addClass('animated fadeInUp')} , 500);
            setTimeout(function(){$('#ga-welcome-sub').addClass('animated fadeInUp')} , 900);
        }
    );

});

$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - $("#ga-navbar").outerHeight(true)
        }, 500);
    }

});