var restart = document.querySelector('#b');
var squares = document.querySelectorAll('td');
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
        squares[i].classList.remove('strike');
    }
}
restart.addEventListener('click', clearBoard);
function handleCellClick() {
    if (this.textContent === 'X') {
        this.textContent = 'O';
    } else if (this.textContent === 'O') {
        this.textContent = 'X';
    } else {
        this.textContent = 'X';
    }
    checkWin();
}
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', handleCellClick);
}
function checkWin() {
    const winPatterns = [
        
        ['one', 'two', 'three'],
        ['four', 'five', 'six'],
        ['seven', 'eight', 'nine'],
        
        ['one', 'four', 'seven'],
        ['two', 'five', 'eight'],
        ['three', 'six', 'nine'],
        
        ['one', 'five', 'nine'],
        ['three', 'five', 'seven']
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const cellA = document.getElementById(a);
        const cellB = document.getElementById(b);
        const cellC = document.getElementById(c);

        if (cellA.textContent && cellA.textContent === cellB.textContent && cellA.textContent === cellC.textContent) {
            cellA.classList.add('strike');
            cellB.classList.add('strike');
            cellC.classList.add('strike');
            break;
        }
    }
}