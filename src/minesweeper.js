class Board{
    constructor(numberOfRows, numberOfColumns, numberOfBombs){
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfColumns * numberOfRows;
        this._playerBoard = generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard(){
        return this._playerBoard;
    }
    flipTile(this._playerBoard, this._bombBoard, rowIndex, colIndex){
    
      if(this._playerBoard[rowIndex][columnIndex] != " "){
        return "This tile has already been flipped!";
      } else if(this._bombBoard[rowIndex][columnIndex] == "B"){
        this._playerBoard[rowIndex][columnIndex] = 'B';
      } else {
        this._playerBoard[rowIndex][columnIndex] = this._getNumberOfNeighborBombs(this._bombBoard, rowIndex, columnIndex);
      }
      this._numberOfTiles--;
    }

}


const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for(let rowsIndex = 0; rowsIndex < numberOfRows ;rowsIndex++){
        let row = [];
        for(let colIndex = 0; colIndex < numberOfColumns; colIndex++){
                row.push(' ');
        };
        board.push(row);
    };
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs)=> {
    let board = [];
    for(let rowsIndex = 0; rowsIndex < numberOfRows ;rowsIndex++){
        let row = [];
        for(let colIndex = 0; colIndex < numberOfColumns; colIndex++){
                row.push(null);
        };
        board.push(row);
    };
    let numberOfBombsPlaced = 0;
    while(numberOfBombsPlaced < numberOfBombs){
        //Need to add logic so new bombs don't get place on top of existing bombs
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColIndex] = 'B';
        numberOfBombsPlaced++;

    };


    return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) =>{
  const neighborOffsets = [
    [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]
  ];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if(
      neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns
    ){
      if(bombBoard[neighborRowIndex][neighborColumnIndex] == "B"){
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs;
}


const printBoard = (board) => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 0, 0);
console.log("Updated Player Board:");
printBoard(playerBoard);
