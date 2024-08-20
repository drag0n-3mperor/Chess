
function createBoard() {
    let board = [];
    for (let y=0; y<8; y++) {
        let temp = [];
        let color = null;
        if (y == 0 || y == 1) color = 'B';
        if (y == 6 || y == 7) color = 'W';
        for (let x=0; x<8; x++) {
            let piece = null;
            if (color !== null) {
                if (y == 1 || y == 6) piece = 'P';
                else if (x == 0 || x == 7) piece = 'R';
                else if (x == 1 || x == 6) piece = 'N';
                else if (x == 2 || x == 5) piece = 'B';
                else if (x == 3) piece = 'Q';
                else piece = 'K';
            }
            temp.push({color: color, piece: piece});
        }
        board.push(temp);
    }
    return board;
}

export default createBoard;