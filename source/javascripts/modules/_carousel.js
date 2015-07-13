// Module: Carousel (Owl Carousel)
// ---------------------------------------------------------------
var CarouselModule = function() {

  $(document).ready(function() {
    $('[data-hook="carousel"]').owlCarousel({
      items: 1,
      loop: true,
      nav: true
    });
  });

};

if ($('[data-hook="carousel"]').length > 0) {
  CarouselModule();
}
