
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
        let temp = [...board];
        temp[row][col] = temp[parseInt(prevId[0])][parseInt(prevId[1])];
        temp[row][col].row = row;
        temp[row][col].col = col;
        temp[row][col].moves++;
        temp[parseInt(prevId[0])][parseInt(prevId[1])] = null;
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