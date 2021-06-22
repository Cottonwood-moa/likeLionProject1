window.onload = function () {
  $("#map_7055c322c99c407db76e4538a87d3811").hide()
  $("#map_9359b393552146b5b49ac6130f91b76a").hide()
  $("#map_17249d550ebd43bb94ad6c3859afbcc7").hide()
  document.getElementById("loadingIndicator").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("loadingIndicator").style.display = "none";
  }, 450);

}
function show_seoul_em() {
  $("#map_7055c322c99c407db76e4538a87d3811").hide(400)
  $("#map_9359b393552146b5b49ac6130f91b76a").hide(400)
  $("#map_17249d550ebd43bb94ad6c3859afbcc7").hide(400)
  $("#map_ef08ee6db78c491d8f2b4ae35d2d5b36").show(400)
}
function show_em_use() {
  $("#map_ef08ee6db78c491d8f2b4ae35d2d5b36").hide(400)
  $("#map_9359b393552146b5b49ac6130f91b76a").hide(400)
  $("#map_17249d550ebd43bb94ad6c3859afbcc7").hide(400)
  $("#map_7055c322c99c407db76e4538a87d3811").show(400)
}
function show_em_rad() {
  $("#map_ef08ee6db78c491d8f2b4ae35d2d5b36").hide(400)
  $("#map_7055c322c99c407db76e4538a87d3811").hide(400)
  $("#map_17249d550ebd43bb94ad6c3859afbcc7").hide(400)
  $("#map_9359b393552146b5b49ac6130f91b76a").show(400)
}
function show_em_heatmap() {
  $("#map_ef08ee6db78c491d8f2b4ae35d2d5b36").hide(400)
  $("#map_9359b393552146b5b49ac6130f91b76a").hide(400)
  $("#map_7055c322c99c407db76e4538a87d3811").hide(400)
  $("#map_17249d550ebd43bb94ad6c3859afbcc7").show(400)
}

// $(function () {
//   var shrinkHeader = 30;
//   $(window).scroll(function () {
//     var scroll = getCurrentScroll();
//     if (scroll >= shrinkHeader) {
//       $('.header').addClass('shrink');
//       $('.header_image').addClass('shrink');
//     }
//     else {
//       $('.header').removeClass('shrink');
//       $('.header_image').removeClass('shrink');
//     }
//   });
//   function getCurrentScroll() {
//     return window.pageYOffset || document.documentElement.scrollTop;
//   }
// });

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
  });
  $(document).on("click", ".scrollup", function (e) {
    e.preventDefault();
    $("html, body").stop().animate({ scrollTop: 0 });
  });
});

function closeLoadingWithMask() {
  $('#mask, #loadingImg').hide();
  $('#mask, #loadingImg').remove();
  alert("Hello, world")
}


