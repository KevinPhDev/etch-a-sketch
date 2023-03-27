const container = document.querySelector('#container');
const containerWidth = 595;
const containerHeight = 595;
const squareBorderWidth = 0.5;
let gridLength = 16;
const squareWidth = containerWidth / (gridLength + 2 * squareBorderWidth);
let a = 1

function addNewSquare() {
    const square = document.createElement('div');
    container.style.maxWidth = `${containerWidth}px`;
    container.style.maxHeight = `${containerHeight}px`;
    square.classList.add('square');
    square.style.border = 'solid black';
    square.style.borderWidth = `${squareBorderWidth}px`;
    square.style.width = `${squareWidth}px`;
    square.style.height = `${squareWidth}px`;
    square.textContent = `${a}`;
    container.appendChild(square);
    square.addEventListener('mouseenter', () =>
    square.style.backgroundColor = '#' + randomColour());
    square.addEventListener('mouseleave', () =>
    square.style.backgroundColor = '');
}

for (let i = 0; i < gridLength * gridLength; i++) {
    addNewSquare();
    a++;
}

function randomColour() {
    colour = Math.floor(Math.random()*16777215).toString(16);
    return colour;
}