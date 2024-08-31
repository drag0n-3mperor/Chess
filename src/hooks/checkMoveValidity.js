
import getValidMoves from "./getValidMoves";

function checkMoveValidity(board, row, col, r, c, color) {
    let temp = [];
    for (let i = 0; i < 8; i++) {
        let _temp = [];
        for (let j = 0; j < 8; j++) _temp.push(board[i][j]);
        temp.push(_temp);
    }
    temp[r][c] = temp[row][col];
    temp[row][col] = null;
    console.log(r, c, 'getValidMoves()');
    return getValidMoves(temp, color);
}

export default checkMoveValidity;
