
import Queen from '../pieces/Queen'
import Rook from '../pieces/Rook'
import Bishop from '../pieces/Bishop'
import Knight from '../pieces/Knight'

function onBtnClick(
        e, selectedPiece, setSelectedPiece, 
        highlight, setHighlight, board, 
        turn, setTurn, setBoard
    ) {
    const arr = [parseInt(e.target.id[0]), parseInt(e.target.id[1])];
    const row = arr[0];
    const col = arr[1];
    const elem = document.getElementById(String(row) + String(col));

    if (selectedPiece && highlight.some(
        highlight => highlight.length === arr.length 
        && highlight.every((value, index) => value === arr[index])
    )) {
        const prevId = selectedPiece.id;
        const selectedRow = parseInt(prevId[0]);
        const selectedCol = parseInt(prevId[1]);
        let temp = [...board];
        temp[row][col] = temp[selectedRow][selectedCol];
        
        if (
            selectedPiece !== null
            && board[selectedRow][selectedCol].symbol === 'K'
            && selectedRow === row
            && Math.abs(selectedCol - col) === 2
        ) {
            if (col === selectedCol + 2) {
                temp[row][col - 1] = temp[row][col + 1];
                temp[row][col + 1] = null;
            }
            if (col === selectedCol - 2) {
                temp[row][col + 1] = temp[row][col - 2];
                temp[row][col - 2] = null;
            }
        } else if (
            selectedPiece !== null
            && board[selectedRow][selectedCol].symbol === 'P'
            && (row === 0 || row === 7)
        ) {
            let input = prompt('Select Q | R | N | B');
            input = input.toUpperCase();
            while (true) {
                if (
                    input === 'Q' || input === 'R'
                    || input === 'B' || input === 'N'
                ) break;
                else {
                    input = prompt('Wrong input. Select Q | R | N | B');
                }
            }
            if (input === 'Q') 
                temp[row][col] = new Queen(board[selectedRow][selectedCol].color, row, col);
            if (input === 'R') 
                temp[row][col] = new Rook(board[selectedRow][selectedCol].color, row, col);
            if (input === 'B') 
                temp[row][col] = new Bishop(board[selectedRow][selectedCol].color, row, col);
            if (input === 'N') 
                temp[row][col] = new Knight(board[selectedRow][selectedCol].color, row, col);
        } else {
            temp[row][col].row = row;
            temp[row][col].col = col;
        }
            
        temp[selectedRow][selectedCol] = null;
        temp[row][col].moves++;
        setTurn((turn === 'W') ? 'B' : 'W');
        setBoard(temp);
        setSelectedPiece(null);
        setHighlight([]);
        return;
    }

    setHighlight([]);
    setSelectedPiece(elem);
    if (board[row][col] && board[row][col].color === turn) {
        setHighlight(board[row][col].onClick(board, setBoard));
    }
}

export default onBtnClick;