import disableBtn from "./disableBtn";
import setWinner from "./setWinner";

function checkForCheckMate(board = [], color = '') {
    let movesAvail = 0;
    let underCheck = false;
    for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
            if (board[i][j] && board[i][j].color === color) {
                movesAvail += board[i][j].onClick(board).length;
            }
            if (board[i][j] && board[i][j].color === color) {
                const sq = document.getElementById(String(i) + String(j));
                if (sq.style.backgroundColor === 'red') underCheck = true;
            }
        }
    }
    
    if (movesAvail === 0) {
        disableBtn();
        if (underCheck === true) setWinner(color === 'B' ? 'W' : 'B');
        else setStaleMate();
    }
}

export default checkForCheckMate;