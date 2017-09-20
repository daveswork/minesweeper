// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`



export class Board{
    constructor(numberOfRows, numberOfColumns, numberOfBombs){
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfColumns * numberOfRows;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard(){
        return this._playerBoard;
    }

    flipTile(rowIndex, colIndex){

      if(this._playerBoard[rowIndex][colIndex] != " "){
        return "This tile has already been flipped!";
      } else if(this._bombBoard[rowIndex][colIndex] == "B"){
        this._playerBoard[rowIndex][colIndex] = 'B';
      } else {
        this._playerBoard[rowIndex][colIndex] = this.getNumberOfNeighborBombs(rowIndex, colIndex);
      }
      this._numberOfTiles--;
    }

    getNumberOfNeighborBombs(rowIndex, columnIndex){
      const neighborOffsets = [
        [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]
      ];
      const numberOfRows = this._bombBoard.length;
      const numberOfColumns = this._bombBoard[0].length;
      let numberOfBombs = 0;
      neighborOffsets.forEach(offset => {
        const neighborRowIndex = rowIndex + offset[0];
        const neighborColumnIndex = columnIndex + offset[1];
        if(
          neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns
        ){
          if(this._bombBoard[neighborRowIndex][neighborColumnIndex] == "B"){
            numberOfBombs++;
          }
        }
      });
      return numberOfBombs;
    }

    hasSafeTiles(){
      return this._numberOfTiles !== this._numberOfBombs;
    }

    print(){
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
    }

    static generatePlayerBoard(numberOfRows, numberOfColumns){
        let board = [];
        for(let rowsIndex = 0; rowsIndex < numberOfRows ;rowsIndex++){
            let row = [];
            for(let colIndex = 0; colIndex < numberOfColumns; colIndex++){
                    row.push(' ');
            };
            board.push(row);
        };
        return board;
    }

    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
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
    }

}
