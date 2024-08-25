
class King {
    color;
    moves;
    row; col;
    symbol;
    constructor(color, row, col) {
        this.color = color;
        this.moves = 0;
        this.row = row; this.col = col;
        this.symbol = 'K';
    }

    onClick(board) {
        let ret = [];
        const diff = [-1, 0, 1];
        diff.forEach((i) => {
            if (this.row+i >= 0 && this.row+i < 8) {
                diff.forEach((j) => {
                    if (this.col+j >= 0 && this.col+j < 8) {
                        if (board[this.row+i][this.col+j]) {
                            if (board[this.row+i][this.col+j].color !== this.color) 
                                ret.push([this.row+i,this.col+j]);
                        } else ret.push([this.row+i,this.col+j]);
                    }
                })
            }
        })
        return ret;
    }
}

export default King