let player1Score = 0;
let player2Score = 0;

document.querySelector("#roll").addEventListener("click", roll);

function roll() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  let randomImageSrc = "images/dice" + randomNumber + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc);

  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomImageSrc1 = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc1);

  
  if (randomNumber > randomNumber1) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    player1Score++;
  } else if (randomNumber1 > randomNumber) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    player2Score++;
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }

  document.getElementById("score1").textContent = "Player 1 Score: " + player1Score;
  document.getElementById("score2").textContent = "Player 2 Score: " + player2Score;
}
