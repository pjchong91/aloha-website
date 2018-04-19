$(document).ready(function(){

  //Flickity product carousel
  $('.productCarousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: false,
    autoPlay: true,
    prevNextButtons: false,
    groupCells: true,
   
});
  
  
  
  console.log("Bebness is bestness");

  //This section checks email for presence of @ and . 
  var x = 
    document.getElementsByClassName("emailInput")[0].value;
  var y = 
    x.length;

  $(".emailInput").css("color","blue");


  $('input').on('keyup', function(){ //Limitation: cannot disable button once enabled (ie. through deletion)
    var sinput = this.value;

    var revSinput = sinput.split("").reverse().join("");

    var ratIndex = revSinput.indexOf('@')

    var rdotIndex = revSinput.indexOf('.');
  
    console.log(sinput, revSinput);
    console.log(rdotIndex, ratIndex);

    
  });

  $("#subscribe").on("submit"), function(event) {
    event.preventDefault();
  }

  // $("#subscribe").on("submit", function(event) {
  //   event.preventDefault();
  //   if (ratIndex>1 && rdotIndex>1 && rdotIndex<ratIndex) {
  //     alert("Thanks for subscribing!  Expect updates from us shortly to your email: " + (sinput));
  //   } else {
  //     alert("Please submit a valid email.");
  //   }
  // });
  

  // $("#subscribe").on('submit', (function(){
  //   event.preventDefault();

  //   if (ratIndex>1 && rdotIndex>1 && rdotIndex<ratIndex){
  //   alert("Thanks for subscribing!  Expect updates from us shortly to your email: " + (sinput));
  // } else {
  //   alert("Please submit a valid email.");
  // }));
  

// JS for item count in the cart - responds to "Add to Cart" button
  var c = document.getElementsByClassName("cartCount")[0].innerHTML;
  console.log(c + ' items in the cart');

$(".cartAdd").on("click", function(){
  i = c;
  i ++ ;
  c = i;
  document.getElementsByClassName("cartCount")[0].innerHTML = c;
});

  
  // $('.main-carousel').flickity({
  //     // options
  //     cellAlign: 'left',
  //     contain: true
  //   });

});  //end of document.ready()