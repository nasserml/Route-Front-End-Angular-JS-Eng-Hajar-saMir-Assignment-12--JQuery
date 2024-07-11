
import navBar from './navbar/navBar.module.js';
import detailsSlide from './details/details.module.js';
import duration from './duration/duration.module.js';
import charCounter from './charactersCounter/charachtersCounter.module.js';


$(document).ready(function () {


    navBar.closeNavBar();
    navBar.openNavBar();

    // $('.open-nav').on('click', function(e) {
    //     $('nav').animate({width: '250px'},50);
    //     $(this).animate({left: '250px'}, 50);
    //     $('.header-caption').animate({left: '140px'}, 50);
    // })

    // $('.close-nav').on('click', function(e) {
    //     $('nav').animate({width: '0'}, 50);
    //     $('.open-nav').animate({left: '0'}, 50);
    //     $('.header-caption').animate({left: '0'}, 50);
    // });


    detailsSlide.initSlide();

    // $('.details-slide h3').on('click', function(e) {
    //     $(this).next('p').slideToggle(500);
    //     console.log($(this).parent().siblings('div').children('p'))
    //     $(this).parent().siblings('div').children('p').slideUp(500);
    // });

    duration.initDuration();

    // const targetDate= new Date('2024-10-25').getTime();
    // console.log(targetDate)

    // var countDown = setInterval( function () {
    //     const now=new Date().getTime();
    
    //     const duuration= targetDate - now;
    
    //     let days = Math.floor(duuration / (1000 * 60 * 60 * 24));

        
    //     let hours = Math.floor( (duuration % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60) )
    
    //     let minutes = Math.floor( (duuration % (1000 * 60 * 60) )/ (1000 * 60 ) );
    
    //     let seconds = Math.floor( ( duuration % (1000 * 60) ) / (1000) )
        
    //     $('.inner-duration .box.day span').html(days + ' D');
    //     $('.inner-duration .box.hour span').html(hours + ' h');
    //     $('.inner-duration .box.minutes span').html(minutes + ' m');
    
    //     $('.inner-duration .box.seconds span').html(seconds + ' s');

    // }, 1000);

    charCounter.initCounter();

    // $('.contact .contact-form textarea').on('keyup', function() {
    //     let val =100 - $('.contact .contact-form textarea').val().length;

    //   if(val > 0 ){
    //       $('#numberOfCharacters').html(val)

    //   } else{
    //     $('#numberOfCharacters').html('your available character finished ')
    //   }
    // })



});


