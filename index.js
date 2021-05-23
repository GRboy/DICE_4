function makeRandomNumber() {

  var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
  var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
  console.log("output" + randomNumber1);
  console.log("output" + randomNumber2);

  document.querySelector(".dice img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelectorAll(".dice img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
  displayResult(whoWon(randomNumber1,randomNumber2));

}

function whoWon(num1, num2) {
  var ret = 0;
  if (num1 > num2) {
    ret = 1;
  } else if (num1 < num2) {
    ret = 2;
  }
  return ret;
}

function displayResult(result) {
  var title = document.querySelector(".container h1");
  if (result === 0) {
    title.innerHTML = "Draw!";
  } else if (result === 1) {
    title.innerHTML = "🚩Player 1 wins";
  } else if (result === 2) {
    title.innerHTML = "Player 2 wins🚩";
  }
}
makeRandomNumber();
