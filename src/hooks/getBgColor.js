
function getBgColor(row, col) {
    if (row % 2 === 0) {
        if (col % 2 === 0) return 'white';
        return 'black';
    }
    if (col % 2 === 0) return 'black';
    return 'white';
}

export default getBgColor;