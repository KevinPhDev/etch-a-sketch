function addNewSquare () {
    const container = document.querySelector('#container');
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.border = '1px solid black';
    square.style.width = '25px';
    square.style.height = '25px';
    square.textContent = `${a}`;
    container.appendChild(square);
}
let a = 1
for (let i = 0; i < 256; i++) {
    addNewSquare();
    a++;
}