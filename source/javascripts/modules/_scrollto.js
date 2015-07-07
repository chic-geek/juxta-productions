// Module: Scroll to
// ---------------------------------------------------------------
var ScrollToModule = function() {

  $(document).ready(function() {
    $('[data-hook="scrollTo"]').on('click', function(e) {
      e.preventDefault();
      var defaultAnchorOffset = 0;
      var anchor = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(anchor).offset().top
      }, 500)
    });
  });

};

if ($('[data-hook="scrollTo"]').length > 0) {
  ScrollToModule();
}
