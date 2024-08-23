
class Pawn {
    color;
    firstMove;
    row; col;
    symbol;
    constructor(color, row, col) {
        this.color = color;
        this.firstMove = true;
        this.row = row; this.col = col;
        this.symbol = 'P';
    }

    onClick(board) {
        if (this.firstMove === true) {
            const diff = (this.color==='B')?1:-1;
            let ret = [];
            for (let i=this.row; i<this.row+2 && i>this.row-2;) {
                i+=diff;
                if (board[i][this.col] != null) break;
                if (i >= 8 || i < 0) continue;
                ret.push([i,this.col]);
            }
            return ret;
        }
        const diff = (this.color==='B')?1:-1;
        let ret = [];
        for (let i=this.row; i<this.row+1 && i>this.row-1; ) {
            i += diff;
            if (board[i][this.col] != null) break;
            if (i >= 8 || i < 0) continue;
            ret.push([i,this.col]);
        }
        return ret;
    }
}

export default Pawn