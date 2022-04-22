function createCell(cell, index) {
  cell = document.createElement("div");
  cell.setAttribute("data-index", index);
  cell.innerText = "";
  return cell;
}

function appendCell(cell) {
  oGameBoard.gameBoardDiv.appendChild(cell).className = "grid-item";
}

function appendToArray(sign, index) {
    oGameBoard.board[index] = sign;

    oGameBoard.winningPatterns = oGameBoard.winningPatterns.map((i) => {
        return i.map((j) => {
            return j == index ? sign : j;
        })
    })
}

function switchSign() {
    return oGameBoard.sign = oGameBoard.sign === "X" ? "O" : "X";
}

function placeSign(target) {
    const fields = document.querySelectorAll(".grid-item")
    fields[target].textContent = oGameBoard.sign;
    appendToArray(oGameBoard.sign, target);

}

function isSameSign(sign) {
    return sign == oGameBoard.sign;
}

function showWinnerMsg() {
    document.querySelector("h1").textContent = `${oGameBoard.sign} won the game!`
}

function gameIsOver() {
    oGameBoard.eventLOn = false;
    showWinnerMsg();
}

function currentGameState() {
    for (let index = 0; index < oGameBoard.winningPatterns.length; index++) {
        const pattern = oGameBoard.winningPatterns[index];
        const result = pattern.every(isSameSign);
        if (result) gameIsOver();
    }
    switchSign();
}

function assignEventL(cell) {
  cell.addEventListener(
    "click",
    () => {
      if (oGameBoard.eventLOn) placeSign(cell.dataset.index);
      currentGameState();
    },
    { once: true }
  );
}

function playAgain() {
    document.querySelector("h1").textContent = `TIC TAC TOE`;
    oGameBoard.gameBoardDiv.textContent = "";
    oGameBoard.board = ["", "", "", "", "", "", "", "", ""];
    oGameBoard.winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
    oGameBoard.sign = "X";
    oGameBoard.eventLOn = true;
    oGameBoard.gameBoardDiv = document.querySelector(".gameboard");
    oGameBoard.createBoard();
}

const oGameBoard = {
  board: ["", "", "", "", "", "", "", "", ""],

  winningPatterns : [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],

  sign: "X",

  eventLOn: true,

  gameBoardDiv: document.querySelector(".gameboard"),

  createBoard: function () {
    this.board.forEach((element, index) => {
      cell = createCell(element, index);
      appendCell(cell, index);
      assignEventL(cell);
    });
  },
};

const playAgainBtn = document.getElementById("replay-btn");
playAgainBtn.addEventListener("click", () => {
    playAgain();
  });

oGameBoard.createBoard();
