let randomnumber1, randomnumber2;
function game() {
    randomnumber1 = Math.floor(Math.random() * 6) + 1;
    const randomimage1 = "dice" + randomnumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomimage1);
    setTimeout(gamez, 500); 
}
document.getElementById("rollbutton").addEventListener("click", game);
function gamez() {
    randomnumber2 = Math.floor(Math.random() * 6) + 1;
    const randomimage2 = "dice" + randomnumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomimage2);
    if (randomnumber1 > randomnumber2) {
        document.querySelector("h1").innerHTML = "You won!🎉";
    } else if (randomnumber2 > randomnumber1) {
        document.querySelector("h1").innerHTML = "Computer won!💻 ";
    } else {
        document.querySelector("h1").innerHTML = "It's a draw!😐 ";
    }
}