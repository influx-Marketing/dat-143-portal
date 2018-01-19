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
    var os = $('.dark-bg').offset().top;
    var ht = $('.dark-bg').height();
    if(scroll > os + ht){
        $('.fixed').addClass('unfixed');
    } else {
    	$('.fixed').removeClass('unfixed');
    }

});