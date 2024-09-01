
function getBgColor(row, col) {
    if (row % 2 === 0) {
        if (col % 2 === 0) return '#dcdc77';
        return 'green';
    }
    if (col % 2 === 0) return 'green';
    return '#dcdc77';
}

export default getBgColor;