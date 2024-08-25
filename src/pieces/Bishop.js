
class Bishop {
    color;
    moves;
    row; col;
    symbol;
    constructor(color, row, col) {
        this.color = color;
        this.moves = 0;
        this.row = row; this.col = col;
        this.symbol = 'B';
    }

    onClick(board) {
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
        return ret;
    }
}

export default Bishop