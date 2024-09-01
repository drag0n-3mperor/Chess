
function disableBtn() {
    for (let i=0; i<8; i++) {
        for (let j=0; j<8; j++) {
            const sq = document.getElementById(String(i) + String(j));
            sq.disabled = true;
        }
    }
}

export default disableBtn;