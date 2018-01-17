(function() {
  console.log('hello there!');

}).call(this);

$(document).ready(function() {
  $('div.hidden')
    .fadeIn(1000)
    .removeClass('hidden');
});

if('CSS' in window && 'supports' in window.CSS) {
    var support = window.CSS.supports('mix-blend-mode','difference');
  // tests for mix-blend-mode support
    support = support?'mix-blend-mode':'no-mix-blend-mode';
document.documentElement.className += support;
}

// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#main').offset().top + $('#main').height();

// on scroll,
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.main-text').css('position','relative');
        $('.main-text').css('color', 'black');
    } else {
        $('.main-text').css('position','');
        $('.main-text').css('color','');
   }

});

 //# sourceMappingURL=main.js.map
