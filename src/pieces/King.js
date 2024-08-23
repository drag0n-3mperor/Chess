
class King {
    color;
    firstMove;
    row; col;
    symbol;
    constructor(color, row, col) {
        this.color = color;
        this.firstMove = true;
        this.row = row; this.col = col;
        this.symbol = 'K';
    }

    onClick() {
        return [
            [this.row+1,this.col],[this.row-1,this.col],
            [this.row,this.col+1],[this.row,this.col-1],
            [this.row+1,this.col+1],[this.row+1,this.col-1],
            [this.row-1,this.col-1],[this.row-1,this.col+1]
        ];
    }
}

export default King