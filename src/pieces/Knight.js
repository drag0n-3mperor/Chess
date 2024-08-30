
class Knight {
    color;
    moves;
    row; col;
    symbol;
    constructor(color, row, col) {
        this.color = color;
        this.moves = 0;
        this.row = row; this.col = col;
        this.symbol = 'N';
    }

    onClick(board) {
        let ret = [];
        const diff = [-2, -1, 1, 2];
        diff.forEach((i) => {
            if (this.row+i < 8 && this.row+i >= 0) {
                diff.forEach((j) => {
                    if (this.col+j < 8 && this.col+j >= 0 && Math.abs(i) != Math.abs(j)) {
                        if (board[this.row+i][this.col+j]) {
                            if (board[this.row+i][this.col+j].color !== this.color) ret.push([this.row+i, this.col+j]);
                        } else ret.push([this.row+i, this.col+j]);
                    }
                });
            }
        });
        return ret;
    }

    getMoves(board) {
        let ret = [];
        const diff = [-2, -1, 1, 2];
        diff.forEach((i) => {
            if (this.row+i < 8 && this.row+i >= 0) {
                diff.forEach((j) => {
                    if (this.col+j < 8 && this.col+j >= 0 && Math.abs(i) != Math.abs(j)) {
                        if (board[this.row+i][this.col+j]) {
                            if (board[this.row+i][this.col+j].color !== this.color) ret.push([this.row+i, this.col+j]);
                        } else ret.push([this.row+i, this.col+j]);
                    }
                });
            }
        });
        return ret;
    }
}

export default Knight