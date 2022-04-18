const gameBoard = document.querySelector('.gameboard');
const cells = document.querySelectorAll('.grid-item');

function createBoard() {
    gameBoard.style.setProperty('--grid-rows', 3);
    gameBoard.style.setProperty('--grid-cols', 3);
    for (i = 0; i < 3 * 3; i++) {
        let cell = document.createElement('div');
        cell.innerText = '';
        gameBoard.appendChild(cell).className = 'grid-item';
    }
}

createBoard(); 


