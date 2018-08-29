$( document ).ready( function(){

  //**********************/
  // JQUERY CUSTOM SLIDER
  //**********************/
  
  // Get window width and height to build slider dimensions:
  var slideCount = $('.slider ul li').length;
  var slideWidth = $(window).width();
  var slideHeight = $(window).height();
  var sliderUlWidth = slideCount * slideWidth;

  // Set slider element widths:
  $('.slider').css({ width: slideWidth });
  $('.slider ul li img').css({ width: slideWidth});
  $('.slider ul li').css({ width: slideWidth});
  $('.slider ul').css({ width: sliderUlWidth });

  // Loop through each image and generate thumbnails:
  $.each($('#navigation ul li a'), function(i, val){
    $('#navigation ul li a')[i].innerHTML = `<img src="${$(`.slider #image_${i + 1} img`).attr('src')}">`;
  });

  // If thumbnail or white dot is clicked, slide image:
  $('#navigation a, #navigation-circles li').click(function() {
    
    // Prevent link action:
    event.preventDefault();
    
    // Gathers id from photo or circle (removes `circle_X` from circle ID)
    let id = this.id.replace('circle_', '');
    
    // Animate slider:
    $('.slider ul').animate({
      left: - id * slideWidth,
    }, 500, "swing", function() {
      // Call back functions runs after animation, updates class for chosen bullet point:
      $.each($('#navigation-circles')[0].children, function(i, val) {
        let bullet = $(this);
        if ($('#navigation-circles')[0].children[i].id == `circle_${id}`) {
          $(bullet).addClass('selected-circle');
        } else {
          $(bullet).removeClass('selected-circle');
        }
      });
    });
  });


});