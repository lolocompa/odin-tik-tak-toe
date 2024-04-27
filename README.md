# Odin Tic Tac Toe

This project is a simple implementation of the classic game Tic Tac Toe, built with HTML, CSS, and JavaScript. It features a basic AI opponent that makes random moves, making it suitable for single-player gameplay. The game allows two players to take turns marking spaces in a 3x3 grid, with the goal of being the first to get three of their marks in a row, column, or diagonal.

## Features

- **Single-Player Mode**: Play against a basic AI that chooses its moves randomly.
- **Reset Button**: Easily restart the game at any point.
- **Win Detection**: The game automatically detects and announces the winner or declares a draw if all spaces are filled without a winner.

## How to Play

1. The game starts with Player 1 (X) and the AI (O) taking turns to mark the spaces in the 3x3 grid.
2. Click on any empty box to make your move as Player 1.
3. The AI will automatically make its move after Player 1.
4. The first player to align three of their marks vertically, horizontally, or diagonally wins the game.
5. If all boxes are filled and no player has 3 marks in a row, the game is a draw.
6. Use the "reset" button to start a new game at any time.

## Implementation Details

- The game logic is implemented in JavaScript, with the main functionality contained within the `script.js` file.
- The game board and UI elements are defined in `index.html` and styled using `styles.css`.
- Player moves, AI moves, win detection, and game reset functionalities are implemented through various functions in the JavaScript file.

### Key JavaScript Functions

- `display_winner(player)`: Displays the game's outcome. [display_winner](https://github.com/lolocompa/odin-tik-tak-toe/tree/main/script.js#L24L36)
- `ai_move(array)`: Determines and executes the AI's move. [ai_move](https://github.com/lolocompa/odin-tik-tak-toe/tree/main/script.js#L73L103)
- `reset.addEventListener(...)`: Resets the game state for a new game. [reset](https://github.com/lolocompa/odin-tik-tak-toe/tree/main/script.js#L105L114)

## Getting Started

To play the game, simply clone the repository and open `index.html` in your web browser.

- git clone https://github.com/lolocompa/odin-tik-tak-toe.git
- cd odin-tik-tak-toe
- open index.html
- Enjoy playing Tic Tac Toe!

## Contributing
Contributions to improve the game or add new features are welcome. Please feel free to fork the repository and submit a pull request.

## License
This project is open source and available under the MIT License.
