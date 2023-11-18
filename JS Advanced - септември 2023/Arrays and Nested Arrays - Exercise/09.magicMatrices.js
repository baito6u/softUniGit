function magicMatrices(matrix) {

    let totalRowSum = matrix[0].reduce((a, curr) => a + curr, 0);

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = 0;
        let sumColumn = 0;

        for (let column = 0; column < matrix.length; column++) {
            sumRow += matrix[column][row];
            sumColumn += matrix[row][column];

        }
        if (totalRowSum !== sumRow || totalRowSum !== sumColumn) {
            return false;
        }
    }

    return true;
}
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]));
// true
// magicMatrices(
//     [[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]);
// // false
// magicMatrices([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]]);
//     // true