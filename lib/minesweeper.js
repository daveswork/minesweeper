"use strict";

/*
let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
*/
var g = new Game(3, 3, 3);
g.playMove(0, 0);
//printBoard(playerBoard);
console.log('Bomb Board:');
//printBoard(bombBoard);
//flipTile(playerBoard, bombBoard, 0, 0);
console.log("Updated Player Board:");
//printBoard(playerBoard);