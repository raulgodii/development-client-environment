class puzzle{
    whitePieceX; // Index [x] of the white Space
    whitePieceY; // Index [y] of the white Space
    dim; // Dimensions of the board
    board; // Board

    constructor(dim){
        // Create the board with dimension: dim x dim and save whiteSpace position
        this.board = this.createBoard(dim);
        this.whitePieceX = dim-1; 
        this.whitePieceY = dim-1;
        this.dim = dim;

        // Create the solution
        this.solution = this.board;

        // Shuffle
        this.shuffleBoard();
    }

    // CREATE BOARD DIMxDIM
    createBoard(dim){
        let cont = 0;
        let board = [];
        for(let y=0; y<dim; y++){
            board [y] = [];
            for(let x=0; x<dim; x++){
                board[y][x] = cont;
                cont++;
            }
        }
        board[dim-1][dim-1] = -1; // White Space
        return board;
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
            }
            table.appendChild(tr);
        }
    }

    // SHUFFLE BOARD (moving whitePiece)
    shuffleBoard(){
        let movements = ["moveRight", "moveLeft", "moveUp", "moveDown"];
        for(let i=0; i<50; i++){
            let randomMovement = movements[Math.floor(Math.random()*movements.length)];
            console.log(randomMovement);
            this[randomMovement]();
        }
    }

    // MOVE RIGHT (whitePiece)
    moveRight(){
        if(this.validMovement(this.whitePieceY, this.whitePieceX, this.whitePieceY, this.whitePieceX+1)){
            this.board[this.whitePieceY][this.whitePieceX] = this.board[this.whitePieceY][this.whitePieceX+1];
            this.board[this.whitePieceY][this.whitePieceX+1] = -1;
            this.whitePieceX += 1;
            this.showBoard();
            return true;
        }
        return false;   
    }

    // MOVE LEFT (whitePiece)
    moveLeft(){
        if(this.validMovement(this.whitePieceY, this.whitePieceX, this.whitePieceY, this.whitePieceX-1)){
            this.board[this.whitePieceY][this.whitePieceX] = this.board[this.whitePieceY][this.whitePieceX-1];
            this.board[this.whitePieceY][this.whitePieceX-1] = -1;
            this.whitePieceX -= 1;
            this.showBoard();
            return true;
        }
        return false;  
    }

    // MOVE DOWN (whitePiece)
    moveDown(){
        if(this.validMovement(this.whitePieceY, this.whitePieceX, this.whitePieceY+1, this.whitePieceX)){
            this.board[this.whitePieceY][this.whitePieceX] = this.board[this.whitePieceY+1][this.whitePieceX];
            this.board[this.whitePieceY+1][this.whitePieceX] = -1;
            this.whitePieceY += 1;
            this.showBoard();
            return true;
        }
        return false;  
    }

    // MOVE UP (whitePiece)
    moveUp(){
        if(this.validMovement(this.whitePieceY, this.whitePieceX, this.whitePieceY-1, this.whitePieceX)){
            this.board[this.whitePieceY][this.whitePieceX] = this.board[this.whitePieceY-1][this.whitePieceX];
            this.board[this.whitePieceY-1][this.whitePieceX] = -1;
            this.whitePieceY -= 1;
            this.showBoard();
            return true;
        }
        return false;  
    }

    // CHECK IF THE MOVEMENT IS VALID
    // Movement valid if:
    // - does not come off the board
    // - it moves one position
    validMovement(yi, xi, yf, xf){ // xi & yi (initial index) // // xf & yf (final index)
        let valid = (xf<this.dim && yf<this.dim && xf>=0 && yf>=0); // check if does not come off the board

        // distance will be valid if only moves one position (up, down, left, rigth)
        if (valid){
            let distance = Math.abs(xf - xi); 
            distance += Math.abs(yf - yi); 

            if(distance == 1) valid = true;
            else valid = false;
        }

        return valid;
    }
}

dim = prompt("Introduce las dimensiones del tablero");
board = new puzzle(dim);

board.showBoard();