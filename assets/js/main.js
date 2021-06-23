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

function sh_sec6_1() {
  $(".sh_sec6_2").hide()
  $(".sh_sec6_3").hide()
  $(".sh_sec6_4").hide()
  $(".sh_sec6_1").show(400)
}
function sh_sec6_2() {
  $(".sh_sec6_1").hide()
  $(".sh_sec6_3").hide()
  $(".sh_sec6_4").hide()
  $(".sh_sec6_2").show(400)
}
function sh_sec6_3() {
  $(".sh_sec6_1").hide()
  $(".sh_sec6_2").hide()
  $(".sh_sec6_4").hide()
  $(".sh_sec6_3").show(400)
}
function sh_sec6_4() {
  $(".sh_sec6_1").hide()
  $(".sh_sec6_2").hide()
  $(".sh_sec6_3").hide()
  $(".sh_sec6_4").show(400)
}

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
