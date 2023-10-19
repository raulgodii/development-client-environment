document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = [];

    class TresEnRaya {
        constructor() {
            this.currentPlayer = "X";
            this.gameBoard = ["", "", "", "", "", "", "", "", ""];
        }

        handleCellClick(index) {
            if (this.gameBoard[index] === "" && !this.checkWinner()) {
                this.gameBoard[index] = this.currentPlayer;
                this.renderBoard();
                if (!this.checkWinner()) {
                    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
                }
            }
        }

        checkWinner() {
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

            for (const combination of winningCombinations) {
                const [a, b, c] = combination;
                if (this.gameBoard[a] && this.gameBoard[a] === this.gameBoard[b] && this.gameBoard[a] === this.gameBoard[c]) {
                    alert(`¡${this.gameBoard[a]} ha ganado!`);
                    return true;
                }
            }

            if (this.gameBoard.every(cell => cell !== "")) {
                alert("¡Empate!");
                return true;
            }

            return false;
        }

        renderBoard() {
            board.innerHTML = "";
            this.gameBoard.forEach((cell, index) => {
                const cellElement = document.createElement("div");
                cellElement.innerText = cell;
                cellElement.style.width = "100px";
                cellElement.style.height = "100px";
                cellElement.style.display = "flex";
                cellElement.style.justifyContent = "center";
                cellElement.style.alignItems = "center";
                cellElement.style.fontSize = "36px";
                cellElement.style.border = "1px solid black";
                cellElement.addEventListener("click", () => this.handleCellClick(index));
                board.appendChild(cellElement);
            });
        }
    }

    const game = new TresEnRaya();
    game.renderBoard();
});
