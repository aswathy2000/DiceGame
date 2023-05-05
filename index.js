var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var diceNImg1 = "dice" + randomNumber1 + ".png";
var imgSrc1 = "images/" + diceNImg1;


document.querySelectorAll("img")[0].setAttribute("src",imgSrc1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceNImg2 = "dice" + randomNumber2 + ".png";
var imgSrc2 = "images/" + diceNImg2;


document.querySelectorAll("img")[1].setAttribute("src",imgSrc2);


if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="It's Draw!!!"
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!!!"
}
else {
document.querySelector("h1").innerHTML="Player 2 wins!!!"
}


