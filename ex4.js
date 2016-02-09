//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function(){
                  
    console.log('ready') 
          var clicked=true;


    $('.pictures .watch').hide(),$('.pictures .keys').hide(),$('.pictures .phone').hide()
    $('.pictures .wallet').hide(),$('.pictures .flash').hide();



       $('li.watch').click(function() { // first function
$('p.watch, p.wallet, p.keys, p.flash, p.phone').hide();
      //turn on the tool tip
      $('img.watch').show();

      clicked = !clicked;
 	if (clicked) {

   $('img.watch').hide(),$('img.keys').hide(),$('img.phone').hide()
    $('img.wallet').hide(),$('img.flash').hide();

    }})
           $('li.wallet').click(function() { // first function
$('p.watch, p.wallet, p.keys, p.flash, p.phone').hide();
      //turn on the tool tip
      $('img.wallet').show();
      clicked = !clicked;
 	if (clicked) {
  $('img.watch').hide(),$('img.keys').hide(),$('img.phone').hide()
    $('img.wallet').hide(),$('img.flash').hide();

    }})
           $('li.keys').click(function() { // first function
$('p.watch, p.wallet, p.keys, p.flash, p.phone').hide();
      //turn on the tool tip
      $('img.keys').show();
      clicked = !clicked;
 	if (clicked) {

  $('img.watch').hide(),$('img.keys').hide(),$('img.phone').hide()
    $('img.wallet').hide(),$('img.flash').hide();

    }})

                      $('li.phone').click(function() { // first function
$('p.watch, p.wallet, p.keys, p.flash, p.phone').hide();
      //turn on the tool tip
      $('img.phone').show();
      clicked = !clicked;
 	if (clicked) {

  $('img.watch').hide(),$('img.keys').hide(),$('img.phone').hide()
    $('img.wallet').hide(),$('img.flash').hide();

    }})

       $('li.flash').click(function() { // first function
$('p.watch, p.wallet, p.keys, p.flash, p.phone').hide();
      //turn on the tool tip
      $('img.flash').show();
      clicked = !clicked;
 	if (clicked) {

  $('img.watch').hide(),$('img.keys').hide(),$('img.phone').hide()
    $('img.wallet').hide(),$('img.flash').hide();

    }})

       $('img.watch').click(function(){
    
    $('p.watch').slideToggle();

})

     $('img.wallet').click(function(){
    
    $('p.wallet').slideToggle();

})
       $('img.phone').click(function(){
    
    $('p.phone').slideToggle();

})
       $('img.keys').click(function(){
    
    $('p.keys').slideToggle();

})
       $('img.flash').click(function(){
    
    $('p.flash').slideToggle();

})



       
       
          

})