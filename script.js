
const playAgainBtn = document.getElementById("replay-btn");

function createCell(cell, index) {
  cell = document.createElement("div");
  cell.setAttribute("data-index", index);
  cell.innerText = "";
  return cell;
}

function appendCell(cell, index) {
  oGameBoard.gameBoardDiv.appendChild(cell).className = "grid-item";
  oGameBoard.board[index] = 
}

function currentSign() {
    return oGameBoard.sign = oGameBoard.sign === "X" ? "O" : "X";
}

function placeSign(target) {
    const fields = document.querySelectorAll(".grid-item")
    console.log(fields[target]);
    fields[target].textContent = currentSign();
}

function checkWinner() {
    
}

function assignEventL(cell) {
  cell.addEventListener(
    "click",
    () => {
      placeSign(cell.dataset.index);
      checkWinner();
    },
    { once: true }
  );
}

const oGameBoard = {
  board: ["", "", "", "", "", "", "", "", ""],

  sign: "O",

  gameBoardDiv: document.querySelector(".gameboard"),

  createBoard: function () {
    this.board.forEach((element, index) => {
      cell = createCell(element, index);
      appendCell(cell, index);
      assignEventL(cell);
    });
  },
};

oGameBoard.createBoard();
