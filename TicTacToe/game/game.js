document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded")
    let gameArray = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    let gameOver = false; // Flag to track if the game is over
    let isPlayerTurn = true; // Flag to track if it's the player's turn
    let filledCells = 0; // Counter for filled cells


    const cells = document.querySelectorAll(".cell");
    const imgs = document.querySelectorAll("img");

    const highlightWinningCells = (indices, color) => {
        indices.forEach(index => {
            cells[index].style.backgroundColor = color;
        });
    };

    const checkWinCondition = (player, row, col) => {
        //IF the current player's placement aligns with a win
        if (
            (gameArray[row][0] === player && gameArray[row][1] === player && gameArray[row][2] === player) ||
            (gameArray[0][col] === player && gameArray[1][col] === player && gameArray[2][col] === player) ||
            (gameArray[0][0] === player && gameArray[1][1] === player && gameArray[2][2] === player) ||
            (gameArray[0][2] === player && gameArray[1][1] === player && gameArray[2][0] === player)
        ) { //Then create a winningCells array that inserts all the winning cells inside
            const winningCells = [];
            if (gameArray[row][0] === player && gameArray[row][1] === player && gameArray[row][2] === player) {
                winningCells.push(row * 3, row * 3 + 1, row * 3 + 2);
            } else if (gameArray[0][col] === player && gameArray[1][col] === player && gameArray[2][col] === player) {
                winningCells.push(col, col + 3, col + 6);
            } else if (gameArray[0][0] === player && gameArray[1][1] === player && gameArray[2][2] === player) {
                winningCells.push(0, 4, 8);
            } else if (gameArray[0][2] === player && gameArray[1][1] === player && gameArray[2][0] === player) {
                winningCells.push(2, 4, 6);
            }
            //If player is 1, will highlight green, otherwise it will highlight red
            highlightWinningCells(winningCells, player === 1 ? "green" : "red");
            console.log(`Player ${player} wins!`); //`` is basically like f' string from Python
            document.getElementById("turn").textContent = `Player ${player} wins!`;
            gameOver = true;
            return true;
        }
        return false;
    };

    const checkTieCondition = () => {
        if (filledCells === 9 && !gameOver) {
            console.log("It's a tie!");
            document.getElementById("turn").textContent = "It's a tie!";
            gameOver = true; // Ensure game stops after tie is detected
        }
    };

    document.getElementById("turn").textContent = "Player 1 turn!"; // Set initial turn

    const handlePlayerMove = (cell, row, col) => {
        gameArray[row][col] = 1;
        filledCells++;
        const X = document.createElement('img');
        X.src = "img/X.png";
        X.alt = "X";
        cell.appendChild(X);

        if (checkWinCondition(1, row, col)) return true;

        checkTieCondition(); // Check for a tie after player move

        if (!gameOver) {
            document.getElementById("turn").textContent = "Player 2 turn!";
            isPlayerTurn = false; // Switch to AI turn
        }
        return false;
    };

    const handleAIMove = () => {
        setTimeout(() => {
            if (gameOver) return; // Prevent AI from moving after game is over
            let aiMoveMade = false;
            while (!aiMoveMade && !gameOver) {
                const randomRow = Math.floor(Math.random() * 3);
                const randomCol = Math.floor(Math.random() * 3);

                if (gameArray[randomRow][randomCol] === 0) {
                    gameArray[randomRow][randomCol] = 2;
                    filledCells++;
                    const O = document.createElement("img");
                    O.src = "img/O.png";
                    O.alt = "O";
                    cells[randomRow * 3 + randomCol].appendChild(O);
                    aiMoveMade = true;

                    if (checkWinCondition(2, randomRow, randomCol)) {
                        gameOver = true;
                    } else {
                        checkTieCondition(); // Check for a tie after AI move
                        if (!gameOver) {
                            document.getElementById("turn").textContent = "Player 1 turn!";
                            isPlayerTurn = true;
                        }
                    }
                }
            }
        }, 500); // 500ms delay
    };

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            if (gameOver || !isPlayerTurn) return;

            const row = Math.floor(index / 3);
            const col = index % 3;

            if (gameArray[row][col] !== 0) {
                console.log("That tile is taken!");
                return;
            }

            if (handlePlayerMove(cell, row, col)) return;

            if (!gameOver) {
                handleAIMove();
            }
        });
    });
    function beginGame()
    {
        console.log("Redirecting to index.html")
        window.location.href = "index.html"
    }
    function buttonReset()
    {
        // Reset the game array
        gameArray = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        // Reset the filled cells counter and flags
        filledCells = 0;
        gameOver = false;
        isPlayerTurn = true;

        // Reset the cell backgrounds and remove images
        cells.forEach(cell => {
            cell.style.backgroundColor = "transparent";
            while (cell.firstChild) //removes all child elements by constantly checking if it has a "first" child element
            {
                cell.removeChild(cell.firstChild)
            }
        })
        document.getElementById("turn").textContent = "Player 1 turn!";
    }
    // Add event listener for begin button on the homepage
    const beginButton = document.querySelector('#beginButton');
    if (beginButton) {
        beginButton.addEventListener('click', beginGame);
    }

    const resetButton = document.querySelector('#reset');
    if (resetButton) {
        resetButton.addEventListener('click', buttonReset);
    }

});
