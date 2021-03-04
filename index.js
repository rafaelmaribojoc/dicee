
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImgDice1 = "images/dice" + randomNumber1 + ".png";
var randomImgDice2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImgDice1);
image2.setAttribute("src", randomImgDice2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏁 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏁";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
