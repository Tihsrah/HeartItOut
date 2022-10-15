$(document).ready(function(){
    // $(".row1").hide();
    $(".row2").hide();
    $(".row3").hide();

    $(".toggle-btn1").click(function(){
        $(".row1").toggle();
    });
    $(".toggle-btn1").click(function(){
        $("i").toggleClass("upside-down");
      });

    $(".toggle-btn2").click(function(){
        $(".row2").toggle();
      });


      $(".toggle-btn3").click(function(){
        $(".row3").toggle();
      });

  });