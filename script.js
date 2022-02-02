$(document).ready(function() {
  /* Open Panel */
  $(".hamburger").on('click', function() {
    $(".menu").toggleClass("menu--open", 500, 'easeOutCubic');
    $(".hamburger").toggleClass("hamburger--open");
    $("body").toggleClass("body--fixed")
  });
})
