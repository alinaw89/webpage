$(document).ready(function(){
  hideDiv();

  $(window).resize(function(){
    hideDiv();
  });
});

function hideDiv(){
  if ($(window).width() < 986){
    $(".nawal_intro").hide();
  } else {
    $(".nawal_intro").show();
  }
}
