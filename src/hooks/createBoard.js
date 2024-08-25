import { v4 as uuidv4 } from 'uuid';
import Pawn from '../pieces/Pawn';
import King from '../pieces/King';
import Rook from '../pieces/Rook';
import Bishop from '../pieces/Bishop';
import Knight from '../pieces/Knight';
import Queen from '../pieces/Queen';

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
                if (y == 1 || y == 6) piece = new Pawn(color,y,x);
                else if (x == 0 || x == 7) piece = new Rook(color,y,x);
                else if (x == 1 || x == 6) piece = new Knight(color,y,x);
                else if (x == 2 || x == 5) piece = new Bishop(color,y,x);
                else if (x == 3) piece = new Queen(color,y,x);
                else piece = new King(color,y,x);
            }
            temp.push(piece);
        }
        board.push(temp);
    }
    return board;
}

export default createBoard;