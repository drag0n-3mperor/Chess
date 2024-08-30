

function getValidMoves(board, color) {
    console.log(board);
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] && board[i][j].color !== color && board[i][j].symbol === 'B') {
                const arr = board[i][j].getMoves(board);
                console.log(i, j, 'arr', arr)
                for (let k = 0; k < arr.length; k++) {
                    const e = arr[k];
                    if (board[e[0]][e[1]] && board[e[0]][e[1]].symbol === 'K'
                        && board[e[0]][e[1]].color === color) {
                            console.log(false);
                            return false;
                        }
                }
            }
        }
    }
    console.log(true);
    return true;
}

export default getValidMoves;