
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