
import getValidMoves from "../hooks/getValidMoves";
class Rook {
    color;
    firstMove;
    row; col;
    symbol;
    constructor(color, row, col) {
        this.color = color;
        this.firstMove = true;
        this.row = row; this.col = col;
        this.symbol = 'R';
    }

    checkValidity(board, r, c) {
        let temp = [];
        for (let i = 0; i < 8; i++) {
            let _temp = [];
            for (let j = 0; j < 8; j++) _temp.push(board[i][j]);
            temp.push(_temp);
        }
        temp[r][c] = temp[this.row][this.col];
        temp[this.row][this.col] = null;
        console.log(r, c, 'getValidMoves()');
        return getValidMoves(temp, this.color);
    }

    onClick(board) {
        let ret = [];
        for (let i=this.row+1; i<8; i++) {
            if (board[i][this.col]) {
                if (board[i][this.col].color !== this.color
                    && this.checkValidity(board, i, this.col) === true) 
                    ret.push([i,this.col]);
                break;
            }
            if (this.checkValidity(board, i, this.col) === true) ret.push([i,this.col]);
        }
        for (let i=this.row-1; i>=0; i--) {
            if (board[i][this.col]) {
                if (board[i][this.col].color !== this.color
                    && this.checkValidity(board, i, this.col) === true) 
                    ret.push([i,this.col]);
                break;
            }
            if (this.checkValidity(board, i, this.col) === true) ret.push([i,this.col]);
        }
        for (let i=this.col+1; i<8; i++) {
            if (board[this.row][i]) {
                if (board[this.row][i].color !== this.color
                    && this.checkValidity(board, i, this.col) === true) 
                    ret.push([this.row, i]);
                break;
            }
            if (this.checkValidity(board, this.row, i) === true) ret.push([this.row, i]);
        }
        for (let i=this.col-1; i>=0; i--) {
            if (board[this.row][i]) {
                if (board[this.row][i].color !== this.color
                    && this.checkValidity(board, i, this.col) === true) 
                    ret.push([this.row, i]);
                break;
            }
            if (this.checkValidity(board, this.row, i) === true) ret.push([this.row, i]);
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

export default Rook