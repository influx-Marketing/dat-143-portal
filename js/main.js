(function() {
  console.log('hello there!');

}).call(this);

$(document).ready(function() {
  $('div.hidden')
    .fadeIn(1000)
    .removeClass('hidden');
});
