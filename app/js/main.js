
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
 * 
 * @param {number} x 
 * @param {number} y 
 */
function printCoord(x, y) {
    console.log(`(${x}, ${y})`);
}