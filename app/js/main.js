let x = 3;

/**
 * From var To const/let
 * @param {boolean} randomize 
 * @return {number} x
 */
function func(randomize) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    return x;
}

/**
 * String interpolation
 * @param {number} x 
 * @param {number} y 
 */
function printCoord(x, y) {
    console.log(`(${x}, ${y})`);
}

// ES6 template literals can span multiple lines:
const HTML5_SKELETON = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
    </body>
    </html>
`;

function printMultipleLines() {
    console.log(HTML5_SKELETON);
}

function handleClick() {
    alert("Button Click");
}

function UiComponent() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        this.handleClick();
    });
}

const arr = [1, 2, 3];
const squares = arr.map(x => x * x);
/**
 * Awesome
 */
function printArrowFunc() {
    arr.forEach(function(element) {
        console.log(element);
    }, this);

    squares.forEach(x => console.log(x), this);
}