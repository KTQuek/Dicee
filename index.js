

function rollTheDice() {
  return Math.floor((Math.random() * 6) + 1);
}

var randomNUmber1 = rollTheDice();

var randomDiceImage = "dice" + randomNUmber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNUmber2 = rollTheDice();

var randomDiceImage2 = "dice" + randomNUmber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if (randomNUmber1 > randomNUmber2) {
  document.querySelector("h1").innerHTML = "🥂 Player 1 Wins!";
}
else if(randomNUmber2 > randomNUmber1) {
  document.querySelector("h1").innerHTML = "🍻 Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "🥃 It is a draw!";
}
