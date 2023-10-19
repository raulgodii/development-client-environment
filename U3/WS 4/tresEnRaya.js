class ticTacToe{
    dim; // Dimension of the board (3)
    board; // Board 3x3 of the game
    round; // Round of the game
    constructor(){
        this.dim = 3;
        this.board=this.createBoard();
        this.round=0;
    }

    // Shows the actually Board
    showBoard(){
        // Obtain the table
        const table = document.getElementById("board");

        // Clean the table
        table.innerHTML = '';

        // Create the board
        for (let i = 0; i < this.dim; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j < this.dim; j++) {
                const td = document.createElement("td");
                td.textContent = this.board[i][j];
                tr.appendChild(td);
                td.setAttribute("id", i+", "+j);
                td.setAttribute("onclick", "board.putPiece(" + i + ", " + j + ")");
            }
            table.appendChild(tr);
        }
    }

    // CREATE BOARD 3x3
    createBoard(){
        let board = [[" "," "," "],[" "," "," "],[" "," "," "]];
        return board;
    }

    // PUT PIECE
    putPiece(y, x){
        if(this.isValid(y, x)){
            const element = document.getElementById(y+", "+x);
            if(this.round%2==0){
                element.textContent = "X";
                this.board[y][x] = "X";
                this.round++;
            }else{
                element.textContent = "O";
                this.board[y][x] = "O";
                this.round++;
            }
        }
        this.checkWinner();
    }

    // IS VALID
    // Check if the movement is valid
    isValid(y, x){
        if(this.board[y][x] === " ") return true;
        else return false;
    }

    // CHECK WINNER
    // Check if the game has finished
    checkWinner(){
        if(this.round == 9){
            this.finishGame("d");
        }

        let playerX = this.positionsPlayer("X");
        let playerO = this.positionsPlayer("O");
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let i=0; i<winningCombinations.length; i++){
            if(areEquals(winningCombinations[i], playerX)){
                this.finishGame("X");
            } else if(areEquals(winningCombinations[i], playerO)){
                this.finishGame("O");
            }
        }

        function areEquals(arr1, arr2) {
            if (arr1.length !== arr2.length) {
                return false;
            }
        
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }
        
            return true;
        }
        

    }

    // POSITIONS PLAYER
    // Check and return the positions of the player in a array
    positionsPlayer(player){
        let positions = [];
        let cont = 0;

        for(i=0; i<3; i++){
            for(j=0; i<3; i++){
            
            }
        }
        this.board.forEach((y, yi) => {
            y.forEach((x, xi) => {
                if(this.board[yi, xi]==player){
                    positions.push(cont);
                }
                cont++;
            });
        });

        console.log("Positions: "+ positions);
        return positions;
    }

    // FINISH GAME
    // Print the result of the game
    finishGame(r){
        const res = document.getElementById("res");
        switch (r) {
            case "d":
                res.textContent = "Fin del juego: Empate";
                break;
            case "O":
                res.textContent = "Fin del juego: Ha ganado el jugador O";
                break;
            case "X":
                res.textContent = "Fin del juego: Ha ganado el jugador X";
                break;
            default:
                res.textContent = "Ha habido un error al acabar el juego";
        }
    }
}