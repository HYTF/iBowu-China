$(window).scroll(function() {
  $("#line").css({
    'height': 250 + ($(this).scrollTop())
  })
});

$(document).ready(function() {
  $("#eventmenu").mouseenter(function(){
      $("#dropdown").slideDown();
  }); 

  $("#eventmenu").mouseleave(function(){
      $("#dropdown").slideUp();
  }); 

  $("#eventmenu2").mouseenter(function(){
      $("#dropdown2").slideDown();
  }); 

  $("#eventmenu2").mouseleave(function(){
      $("#dropdown2").slideUp();
  }); 
});

function fadeIn($obj) {
    $obj.css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 500);
}

function fadeOut($obj) {
    $obj.css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 500);
}

function goTop() {
    $('html,body').animate({ scrollTop: 0 }, 500);
  }