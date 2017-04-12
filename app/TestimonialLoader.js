// Replace mobile testimonials with the Desktop (all the HTML for Desktop is here)
// This is so that the mobile version stays lightweight (doesn't load desktop at all)
// But the desktop version does still load the desktop version (dekstop is heavier)
// THIS SCRIPT IS UNFINISHED, AND THE NEXT THING THAT NEEDS TO BE COMPLETED
$( document ).ready( upDateTestimonials() );
$( window ).resize(function() {
  // Can this function have like a 200ms delay?
  upDateTestimonials();
});

function upDateTestimonials() {
if ($(window).width() >= 640) {
    loadDesktopTestimonial();
} else {
    loadMobileTestimonial();
}
}

function loadDesktopTestimonial() {
$( "#testimonials" ).load( "TestimonialSection.html #DesktopTestimonial", function() {
  var swiper = new Swiper('.desktop-swiper', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    effect: 'fade'
  });
});
}
function loadMobileTestimonial() {
$( "#testimonials" ).load( "TestimonialSection.html #MobileTestimonial", function() {
  var swiper = new Swiper('.mobile-swiper', {
  pagination: '.swiper-pagination',
  grabCursor: true,
  effect: 'cube',
  cube: { shadow: false, slideShadows: false }
  });
});
}
