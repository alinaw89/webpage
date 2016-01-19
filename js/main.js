$(document).ready(function(){
  hideDiv();
});

function hideDiv(){
  if ($(window).width() < 986){
    $(".nawal_intro").hide();
  } else {
    console.log("All good in the hood");
  }
}
