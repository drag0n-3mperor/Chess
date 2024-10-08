
import checkMoveValidity from "../hooks/checkMoveValidity";

class Pawn {
    color;
    moves;
    row; col;
    symbol;
    constructor(color, row, col) {
        this.color = color;
        this.moves = 0;
        this.row = row; this.col = col;
        this.symbol = 'P';
    }

    onClick(board) {
        const diff = (this.color === 'B') ? 1 : -1;
        let ret = [];
        if (this.row + diff >= 0 && this.row + diff < 8) {
            if (
                this.col - 1 >= 0 && board[this.row + diff][this.col - 1]
                && board[this.row + diff][this.col - 1].color != this.color
                && checkMoveValidity(board, this.row, this.col, this.row + diff, this.col - 1, this.color) === true
            ) ret.push([this.row + diff, this.col - 1]);
            if (
                this.col + 1 < 8 && board[this.row + diff][this.col + 1]
                && board[this.row + diff][this.col + 1].color != this.color
                && checkMoveValidity(board, this.row, this.col, this.row + diff, this.col + 1, this.color) === true
            ) ret.push([this.row + diff, this.col + 1]);
        }
        if (this.moves === 0) {
            for (let i = this.row; i < this.row + 2 && i > this.row - 2;) {
                i += diff;
                if (board[i][this.col] != null) break;
                if (i >= 8 || i < 0) continue;
                if (checkMoveValidity(board, this.row, this.col, i, this.col, this.color) === true)
                    ret.push([i, this.col]);
            }
            return ret;
        }
        for (let i = this.row; i < this.row + 1 && i > this.row - 1;) {
            i += diff;
            if (board[i][this.col] != null) break;
            if (i >= 8 || i < 0) continue;
            if (checkMoveValidity(board, this.row, this.col, i, this.col, this.color) === true)
                ret.push([i, this.col]);
        }
        return ret;
    }

    getMoves(board) {
        const diff = (this.color === 'B') ? 1 : -1;
        let ret = [];
        if (this.row + diff >= 0 && this.row + diff < 8) {
            if (this.col - 1 >= 0) {
                if (board[this.row+diff][this.col-1]) {
                    if (board[this.row+diff][this.col-1].color !== this.color) 
                        ret.push([this.row + diff, this.col - 1]);
                } else {
                    ret.push([this.row + diff, this.col - 1]);
                }
            }
            if (this.col + 1 < 8) {
                if (board[this.row+diff][this.col-1]) {
                    if (board[this.row+diff][this.col-1].color !== this.color) 
                        ret.push([this.row + diff, this.col + 1]);
                } else {
                    ret.push([this.row + diff, this.col + 1]);
                }
            }
        }
        return ret;
    }
}

export default Pawn;