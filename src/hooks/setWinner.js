
function setWinner(color = '') {
    color = (color === 'W') ? 'White' : 'Black';
    alert(`${color} won the game`);
}

export default setWinner;