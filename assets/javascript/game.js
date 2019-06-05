var random_result;
var lost = 0;
var win = 0;
var past = 0;

var resetAndStart = function() {
  $(".crystals").empty();

  var images = [
    "./assets/images/crystal1.jpg",
    "./assets/images/crystal2.jpg",
    "./assets/images/crystal3.jpg",
    "./assets/images/crystal4.jpg"
  ];

  random_result = Math.floor(Math.random() * 69) + 30;
  $("#result").html("Random Result: " + random_result);

  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<img>");
    crystal.attr({
      class: "crystal",
      "data-random": random
    });

    crystal.attr("src", images[i]);

    $(".crystals").append(crystal);
  }
  $("#past").html(past);
};

resetAndStart();

$(".crystals").on("click", ".crystal", function() {
  var num = parseInt($(this).attr("data-random"));

  past += num;

  $("#past").text(past);

  console.log(past);

  if (past > random_result) {
    lost++;

    $("#lost").html("Game Over:", lost);

    past = 0;

    resetAndStart();
  } else if (past === random_result) {
    win++;

    $("#win").html("You won:", win);

    past = 0;

    resetAndStart();
  }
});
