const gameBoard = document.querySelector(".gameboard");

let signOne = "X";
let signTwo = "O";
let player = true;

function createBoard() {
  gameBoard.style.setProperty("--grid-rows", 3);
  gameBoard.style.setProperty("--grid-cols", 3);
  for (i = 0; i < 3 * 3; i++) {
    let cell = document.createElement("div");
    cell.innerText = "";
    gameBoard.appendChild(cell).className = "grid-item";
  }

  const cells = document.querySelectorAll(".grid-item");

  assignEventL(cells);
}

function whoClicked() {
  if (player) {
    player = false;
    return signOne;
  } else {
    player = true;
    return signTwo;
  }
}

function isOccupied(cell) {
  if (cell.textContent != "") return true;
  return false;
}

function gameOver() {
    
}

function assignEventL(cells) {
  cells.forEach((cell) => {
    if (!isOccupied(cell)) {
      cell.addEventListener("click", () => {
        sign = whoClicked();
        cell.textContent = sign;
        gameOver();
      });
    }
  });
}

createBoard();
