$(document).ready(function(){

  //Flickity product carousel from: https://flickity.metafizzy.co/
  $('.productCarousel').flickity({
    cellAlign: 'center',
    contain: true,
    wrapAround: false,
    autoPlay: true,
    prevNextButtons: false,
    groupCells: 1,
   
});
//Smooth scroll function from: https://css-tricks.com/snippets/jquery/smooth-scrolling/#article-header-id-1
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // // Callback after animation
          // // Must change focus!
          // var $target = $(target);
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });
  

 // Checked email in "subscribe" input form for validity.

$("#subscribe").on('click', 'button', function(){
    var sinput = 
    document.getElementsByClassName("emailInput")[0].value;

    var revSinput = sinput.split("").reverse().join("");

    var ratIndex = revSinput.indexOf('@')

    var rdotIndex = revSinput.indexOf('.');

// This checks for presence of @ and a '.' after @.  Would reccomend using regex to improve project.
   if (ratIndex>1 && rdotIndex>1 && rdotIndex<ratIndex) {
        alert("Thanks for subscribing!  Expect updates from us shortly to your email: " + (sinput));
    } else {
        alert("Please submit a valid email.")
    };

});


// JS for item count in the cart - responds to "Add to Cart" button
 
  var cartCount = $('.cartCount').html();
$(".cartAdd").on("click", function(){
  // i = cartCount;
  // i ++ ;
  cartCount ++;
  document.getElementsByClassName("cartCount")[0].innerHTML = cartCount;

});

 
});  //end of document.ready()