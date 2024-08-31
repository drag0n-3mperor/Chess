
import checkMoveValidity from "../hooks/checkMoveValidity";

class Queen {
    color;
    moves;
    row; col;
    symbol;
    constructor(color, row, col) {
        this.color = color;
        this.moves = 0;
        this.row = row; this.col = col;
        this.symbol = 'Q';
    }

    onClick(board) {
        let ret = [];
        for (let idiff = -1; idiff <= 1; idiff += 2) {
            for (let jdiff = -1; jdiff <= 1; jdiff += 2) {
                let r = this.row+idiff, c = this.col+jdiff;
                while (r >= 0 && r < 8 && c >= 0 && c < 8) {
                    if (board[r][c]) {
                        if (board[r][c].color !== this.color
                            && checkMoveValidity(board, this.row, this.col, r, c, this.color) === true) 
                            ret.push([r, c]);
                        break;
                    }
                    if (checkMoveValidity(board, this.row, this.col, r, c, this.color) === true)
                        ret.push([r, c]);
                    r += idiff, c += jdiff;
                }
            }
        }
        
        for (let i=this.row+1; i<8; i++) {
            if (board[i][this.col]) {
                if (board[i][this.col].color !== this.color
                    && checkMoveValidity(board, this.row, this.col, i, this.col, this.color) === true) 
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
        for (let idiff = -1; idiff <= 1; idiff += 2) {
            for (let jdiff = -1; jdiff <= 1; jdiff += 2) {
                let r = this.row+idiff, c = this.col+jdiff;
                while (r >= 0 && r < 8 && c >= 0 && c < 8) {
                    if (board[r][c]) {
                        if (board[r][c].color !== this.color) ret.push([r, c]);
                        break;
                    }
                    ret.push([r, c]);
                    r += idiff, c += jdiff;
                }
            }
        }
        
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

export default Queen;