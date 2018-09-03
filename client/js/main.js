$( document ).ready( function(){

  /*
    1. Smooth Scrolling
    2. Jquery Custom Slider
    3. Jquery Custom Tabs
    4. Bootstrap Accordian


  */

  //**********************/
  // 1. SMOOTH SCROLLING
  //**********************/

  // Add smooth scrolling to all on-page anchor links that are not empty:
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });

  //**********************/
  // 2. JQUERY CUSTOM SLIDER
  //**********************/

  // // Get window width and height to build slider dimensions:
  // var slideCount = $('.slider ul li').length;
  // var slideWidth = $(window).width();
  // var slideHeight = $(window).height();
  // var sliderUlWidth = slideCount * slideWidth;

  // // Set slider element widths:
  // $('.slider').css({ width: slideWidth });
  // $('.slider ul li img').css({ width: slideWidth});
  // $('.slider ul li').css({ width: slideWidth});
  // $('.slider ul').css({ width: sliderUlWidth });

  // // Loop through each image and generate thumbnails:
  // $.each($('#navigation ul li a'), function(i, val){
  //   $('#navigation ul li a')[i].innerHTML = `<img src="${$(`.slider #image_${i + 1} img`).attr('src')}">`;
  // });

  // // If thumbnail or white dot is clicked, slide image:
  // $('#navigation a, #navigation-circles li').click(function() {
    
  //   // Prevent link action:
  //   event.preventDefault();
    
  //   // Gathers id from photo or circle (removes `circle_X` from circle ID)
  //   let id = this.id.replace('circle_', '');
    
  //   // Animate slider:
  //   $('.slider ul').animate({
  //     left: - id * slideWidth,
  //   }, 500, "swing", function() {
  //     // Call back functions runs after animation, updates class for chosen bullet point:
  //     $.each($('#navigation-circles')[0].children, function(i, val) {
  //       let bullet = $(this);
  //       if ($('#navigation-circles')[0].children[i].id == `circle_${id}`) {
  //         $(bullet).addClass('selected-circle');
  //       } else {
  //         $(bullet).removeClass('selected-circle');
  //       }
  //     });
  //   });
  // });

  var slideWidth = $(window).width();

  // Loop through each image and generate thumbnails:
  $.each($('#navigation li a'), function (i, val) {
    $('#navigation li a')[i].innerHTML = `<img src="${$(`.slides ul #image_${i + 1} img`).attr('src')}">`;
  });

  $('#scroll-right').click(function(){
    console.log("GOING RIGHT");
  });


  //**********************/
  // 3. JQUERY CUSTOM TABS
  //**********************/

  let sched = {
    scheduleOne: `
      <tbody>
        <tr>
          <td>25 Nov 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr>
          <td>28 Nov 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr class="empty-row">
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>18 Dec 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr class="empty-row">
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7 Jan 2017</td>
          <td>Vestibulum viverra</td>
        </tr>
      </tbody>`,
    scheduleTwo: `
      <tbody>
        <tr>
          <td>17 Nov 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr class="empty-row">
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>13 Dec 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr>
          <td>28 Dec 2016</td>
          <td>Vestibulum viverra</td>
        </tr>
        <tr class="empty-row">
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9 Feb 2017</td>
          <td>Vestibulum viverra</td>
        </tr>
      </tbody>`,
  };

  let schedImages = {
    scheduleOne: "url('./client/img/schedule-mountains-background.jpg",
    scheduleTwo: "url('./client/img/schedule-mountains-2-background.jpg')",
  };

  // Show schedule one by default:
  highlightTab($('#schedule-tabs li:nth-child(1)'));
  changeContent(sched.scheduleOne, schedImages.scheduleOne);

  // If Mountain 1 is clicked:
  $('#schedule-tabs li:nth-child(1)').click(function() {
    event.preventDefault();
    if (!$(this).hasClass('selected-tab')) {
      highlightTab($(this));
      changeContent(sched.scheduleOne, schedImages.scheduleOne);
    }
  });

  // If Mountain 2 is clicked:
  $('#schedule-tabs li:nth-child(2)').click(function() {
    event.preventDefault();
    if (!$(this).hasClass('selected-tab')) {
      highlightTab($(this));
      changeContent(sched.scheduleTwo, schedImages.scheduleTwo);
    }
  });

  // Highlight Tab:
  function highlightTab(tab) {
    $(tab).addClass('selected-tab').children('span').addClass('underline');
    $(tab).siblings().removeClass('selected-tab').children('span').removeClass('underline');
  }

  // Change Content:
  function changeContent(schedule, image, selector='') {
    $(`${selector} #schedule`).css('background-image', image);
    $(`${selector} table`).html(schedule);
  }

  

  //**********************/
  // 4. BOOTSTRAP ACCORDION
  //**********************/

  // Copy default loading schedule (schedule one) into each accordion:
  $('#schedule').clone().appendTo('.accordion-sched-one');
  $('#schedule').clone().appendTo('.accordion-sched-two');

  // Update schedule two accordion:
  changeContent(sched.scheduleTwo, schedImages.scheduleTwo, '.accordion-sched-two');



});
