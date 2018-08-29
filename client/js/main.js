$( document ).ready( function(){

  var slideCount = $('.slider ul li').length;
  var slideWidth = $('.slider ul li').width();
  var slideHeight = $('.slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('.slider').css({ width: slideWidth, height: slideHeight });

  $('.slider ul').css({ width: sliderUlWidth });

  // $('#navigation ul li a').each(function (){

  // });


  console.log($('#navigation ul li a'));
  $.each($('#navigation ul li a'), function(i, val){
    console.log($(`.slider #image_${i+1} img`).attr('src'));
    $('#navigation ul li a')[i].innerHTML = `<img src="${$(`.slider #image_${i + 1} img`).attr('src')}">`;
    console.log(val);
  });

  $('#navigation a').click(function() {
    event.preventDefault();
    let id = this.id;
    console.log(id);

    $('.slider ul').animate({
      left: - id * slideWidth,
    }, 500, "swing", function() {

    });
  });

  // -----------------------------------------------
  // -----------------------------------------------

  $('#slider-navigation a').click(function(){
    event.preventDefault();
    let clickedThumbnail = this;
    $('#history-slider').animate({
      backgroundPositionX: `-${$(window).width()}`,
      }, 200, function() {
        changeBackground(clickedThumbnail.id);
        $('#history-slider').css('background-position-x', '0px');
      });
  });

  let backgroundArray = ['./client/img/history-mountains-background.jpg', './client/img/slide-man-overlooking-valley.jpg', './client/img/slide-group-valley.jpg'];
  function changeBackground(index) {
    console.log(backgroundArray[index]);
    $('#history-slider').css('background-image', `url(${backgroundArray[index]})`);
  }

});