
import checkMoveValidity from "../hooks/checkMoveValidity";

class Rook {
    color;
    moves;
    row; col;
    symbol;
    constructor(color, row, col) {
        this.color = color;
        this.moves = 0;
        this.row = row; this.col = col;
        this.symbol = 'R';
    }

    onClick(board) {
        let ret = [];
        for (let i=this.row+1; i<8; i++) {
            if (board[i][this.col]) {
                if (board[i][this.col].color !== this.color
                    && checkMoveValidity(board, this.row, yhis.col, i, this.col, this.color) === true) 
                    ret.push([i,this.col]);
                break;
            }
            if (checkMoveValidity(board, this.row, this.col, i, this.col, this.color) === true) 
                ret.push([i,this.col]);
        }
        for (let i=this.row-1; i>=0; i--) {
            if (board[i][this.col]) {
                if (board[i][this.col].color !== this.color
                    && checkMoveValidity(board, this.row, this.col, i, this.col, this.color) === true) 
                    ret.push([i,this.col]);
                break;
            }
            if (checkMoveValidity(board, this.row, this.col, i, this.col, this.color) === true) 
                ret.push([i,this.col]);
        }
        for (let i=this.col+1; i<8; i++) {
            if (board[this.row][i]) {
                if (board[this.row][i].color !== this.color
                && checkMoveValidity(board, this.row, this.col, i, this.col, this.color) === true) 
                    ret.push([this.row, i]);
                break;
            }
            if (checkMoveValidity(board, this.row, this.col, this.row, i, this.color) === true) 
                ret.push([this.row, i]);
        }
        for (let i=this.col-1; i>=0; i--) {
            if (board[this.row][i]) {
                if (board[this.row][i].color !== this.color
                && checkMoveValidity(board, this.row, this.col, i, this.col, this.color) === true) 
                    ret.push([this.row, i]);
                break;
            }
            if (checkMoveValidity(board, this.row, this.col, this.row, i, this.color) === true) 
                ret.push([this.row, i]);
        }
        return ret;
    }

    getMoves(board) {
        let ret = [];
        for (let i=this.row+1; i<8; i++) {
            if (board[i][this.col]) {
                if (board[i][this.col].color !== this.color) ret.push([i,this.col]);
                break;
            }
            ret.push([i,this.col]);
        }
        for (let i=this.row-1; i>=0; i--) {
            if (board[i][this.col]) {
                if (board[i][this.col].color !== this.color) ret.push([i,this.col]);
                break;
            }
            ret.push([i,this.col]);
        }
        for (let i=this.col+1; i<8; i++) {
            if (board[this.row][i]) {
                if (board[this.row][i].color !== this.color) ret.push([this.row,i]);
                break;
            }
            ret.push([this.row,i]);
        }
        for (let i=this.col-1; i>=0; i--) {
            if (board[this.row][i]) {
                if (board[this.row][i].color !== this.color) ret.push([this.row,i]);
                break;
            }
            ret.push([this.row,i]);
        }
        return ret;
    }
}

export default Rook;