(function() {
  console.log('hello there!');

}).call(this);

$(document).ready(function() {
  $('div.hidden')
    .fadeIn(1000)
    .removeClass('hidden');
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = $('.dark-bg').offset().top; // determines how far the top of the div is from the top of the window
    var ht = $('.dark-bg').height(); //determines the height of the div
    if(scroll > os + ht){ // adds them together, if you scroll further than the top of the div + its height then carry out if statement
        $('.fixed').addClass('unfixed');
    } 

});

// else {
//     	$('.fixed').removeClass('unfixed');
//     }