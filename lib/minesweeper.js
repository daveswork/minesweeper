'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    for (var rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
        var row = [];
        for (var colIndex = 0; colIndex < numberOfColumns; colIndex++) {
            row.push(' ');
        };
        board.push(row);
    };
    return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];
    for (var rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
        var row = [];
        for (var colIndex = 0; colIndex < numberOfColumns; colIndex++) {
            row.push(null);
        };
        board.push(row);
    };
    var numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        //Need to add logic so new bombs don't get place on top of existing bombs
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColIndex] = 'B';
        numberOfBombsPlaced++;
    };

    return board;
};

var printBoard = function printBoard(board) {
    console.log(board.map(function (row) {
        return row.join(' | ');
    }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);