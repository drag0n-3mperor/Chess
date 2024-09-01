import setCheck from "./setCheck";

function checkForMate(board = [], color = '') {
    for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
            if (board[i][j] && board[i][j].color !== color) {
                const arr = board[i][j].getMoves(board);
                for (let k = 0; k < arr.length; k++) {
                    const e = arr[k];
                    if (board[e[0]][e[1]] && board[e[0]][e[1]].symbol === 'K'
                    && board[e[0]][e[1]].color === color) {
                        setCheck(e[0], e[1]);
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

export default checkForMate;
