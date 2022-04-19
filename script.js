const gameBoard = document.querySelector(".gameboard");
const playAgainBtn = document.getElementById("replay-btn");

let signOne = "X";
let signTwo = "O";
let player = true;
let winner = "";

let winningPatterns = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

let gameOver = false;

function createBoard() {
  gameBoard.style.setProperty("--grid-rows", 3);
  gameBoard.style.setProperty("--grid-cols", 3);
  for (i = 0; i < 3 * 3; i++) {
    let cell = document.createElement("div");
    cell.setAttribute("data-index", i);
    cell.innerText = "";
    gameBoard.appendChild(cell).className = "grid-item";
  }
  const cells = document.querySelectorAll(".grid-item");
  assignEventL(cells);
}

function botMove(cells) {
  let availableCells = [];
  cells.forEach((cell) => {
    if (!isOccupied(cell)) {
      availableCells.push(cell);
    }
  });

  cell = availableCells[Math.floor(Math.random() * availableCells.length)];
  cell.textContent = whoClicked();
  winningPatterns[cell.dataset.index] = true;

}

function whoClicked() {
  player = !player;
  return player ? signTwo : signOne;
}

function isOccupied(cell) {
  if (cell.textContent != "") return true;
  return false;
}

function playAgain() {
  gameBoard.textContent = "";
  createBoard();
  player = true;
  winningPatterns = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  gameOver = false;
}

function isGameOver(cell) {
  cells = document.querySelectorAll(".grid-item");

  switch (true) {
    case winningPatterns[0] == true &&
      winningPatterns[1] == true &&
      winningPatterns[2] == true:
      winner = cells[1].textContent;
      console.log(cells);
      console.log(cells[1].textContent);
      gameOver = true;
    case winningPatterns[3] == true &&
      winningPatterns[4] == true &&
      winningPatterns[5] == true:
      gameOver = true;
    case winningPatterns[6] == true &&
      winningPatterns[7] == true &&
      winningPatterns[8] == true:
      gameOver = true;
    case winningPatterns[0] == true &&
      winningPatterns[3] == true &&
      winningPatterns[6] == true:
      gameOver = true;
    case winningPatterns[1] == true &&
      winningPatterns[4] == true &&
      winningPatterns[7] == true:
      gameOver = true;
    case winningPatterns[2] == true &&
      winningPatterns[5] == true &&
      winningPatterns[8] == true:
      gameOver = true;
    case winningPatterns[0] == true &&
      winningPatterns[4] == true &&
      winningPatterns[8] == true:
      gameOver = true;
    case winningPatterns[2] == true &&
      winningPatterns[4] == true &&
      winningPatterns[6] == true:
      gameOver = true;
  }
}

function assignEventL(cells) {
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (!isOccupied(cell)) {
        sign = whoClicked();
        cell.textContent = sign;

        botMove(cells);
        winningPatterns[cell.dataset.index] = true;
        console.log(gameOver);
        isGameOver(cell);
        console.log(gameOver);
      }
    });
  });
}

playAgainBtn.addEventListener("click", () => {
  playAgain();
});

createBoard();
