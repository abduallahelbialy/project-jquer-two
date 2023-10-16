$(document).ready(function () {
  "use strict";
  //change header height
  $(".header").height($(window).height());

  //scroll to featuer
  $(".header  .arrow .aa").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".feature").offset().top,
      },
      500
    );
  });

  //show more img
  $(".show").click(function () {
    $(".our-work .imgd-hiden").fadeToggle(500);
  });

  //checck testimonies
  var leftarrow = $(".testimonies .fa-chevron-left");
  var rightarrow = $(".testimonies .fa-chevron-right");
  function checckclient() {
    $(".client:first").hasClass("active")
      ? leftarrow.fadeOut()
      : leftarrow.fadeIn();
    $(".client:last").hasClass("active")
      ? rightarrow.fadeOut()
      : rightarrow.fadeIn();
  }
  checckclient();
  $(".testimonies i").click(function () {
    if ($(this).hasClass("fa-chevron-right")) {
      $(".testimonies .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();
        checckclient();
      });
    } else {
      $(".testimonies .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .prev(".client")
          .addClass("active")
          .fadeIn();
        checckclient();
      });
    }
  });
});
