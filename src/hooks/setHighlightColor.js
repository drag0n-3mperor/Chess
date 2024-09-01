import getBgColor from "./getBgColor";

function setHighlightColor(board = [], highlight = []) {
    for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
            if (highlight.some(e => e[0] === i && e[1] === j)) {
                const sq = document.getElementById(String(i) + String(j));
                if (board[i][j]) sq.style.backgroundColor = 'red';
                else sq.style.backgroundColor = 'blue';
            } else {
                const sq = document.getElementById(String(i) + String(j));
                sq.style.backgroundColor = getBgColor(i, j);
            }
        }
    }
}

export default setHighlightColor;