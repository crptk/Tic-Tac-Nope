# 🎮 Tic-Tac-Toe Game by Edrees Amiri (Crptk)  

### 🔗 [Video Demo]([https://youtu.be/HEfmGL1xcM?s=i=XSTKhLf9cPo2I68k](https://youtu.be/fVI3Vmk3Gfg))  
*(This demo was made before AI integration.)*  

## 📝 Project Overview  
This was my **first programming project** and also my **final CS50 project**. I built this **without relying on YouTube tutorials**, using only the guidance of **ChatGPT** for CSS layout, JavaScript syntax, and optimization. This project was a major learning experience, particularly in **JavaScript**, which I struggled with during the course.  

Along the way, I tackled questions like:  
✅ How do I create loops in JavaScript?  
✅ How can I detect which element the mouse is clicking?  
✅ How do I format a grid?  
✅ How do I insert images using JavaScript?  

## 🏗️ How It Works  
The game is structured using **HTML, CSS, and JavaScript**. The **grid is built using simple HTML tables** and styled with **CSS Grid**. The game logic revolves around a **2D array** (`gameArray`), where each cell starts at `0`.  

- **Player Moves:** Clicking a cell updates the array, marking it for Player 1 or 2.  
- **Win Detection:** The program checks all possible winning conditions.  
- **Tie Check:** If all cells are filled and no one wins, it declares a tie.  
- **AI Integration:** The AI moves based on the **Minimax algorithm**, ensuring an unbeatable opponent.  

### 🔍 Key Functions  
🟢 `highlightWinningCells()` – Highlights the winning combination when a player wins.  
🟢 `checkWinCondition()` – Checks all possible win states and identifies the winner.  
🟢 `checkTieCondition()` – Determines if the game ends in a tie.  
🟢 `handlePlayerMove()` – Manages player clicks, updates the game state, and checks for a winner.  
🟢 `handleAIMove()` – Controls the AI’s turn, originally using a random move, later replaced with Minimax.  

## 🤖 Minimax Algorithm (AI)  
The AI uses the **Minimax algorithm**, which makes optimal moves to ensure **it never loses**.  

⚙️ **How it was implemented:**  
- The `minimax` and `checkWinner` functions were **100% AI-generated** (ChatGPT-assisted).  
- The original AI was **random**, but I modified the code to integrate Minimax.  
- I didn't write the algorithm from scratch because I wanted to see how AI would implement it first. Now that I understand how it works, I plan to **rewrite it myself** for deeper learning.  

## 🔄 Reset Functionality  
The game features a **reset button**, allowing players to start fresh without reloading the page.  
