export const sqrt = Mart.sqrt;

/**
 * square
 * @param {number} x 
 */
export function square(x) {
    return x * x;
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
export function diag(x, y) {
    return sqrt(square(x), square(y));
}

module.exports = {
    sqrt: sqrt,
    square: square,
    diag: diag
}