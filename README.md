<div align="center">

# Tic Tac Toe

**A browser-based strategy game with local multiplayer and an unbeatable computer opponent.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Play%20Now-176B4D?style=for-the-badge)](https://tic-tac-toe-game-11.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Live Demo](https://tic-tac-toe-game-11.vercel.app/) · [Source Code](https://github.com/mdnav/tic-tac-toe-game) · [Portfolio](https://portfolio1701.vercel.app/)

</div>

---

## Project Overview

Tic Tac Toe is an interactive web game built with **HTML5, CSS3, and vanilla JavaScript**. Players can compete locally in a two-player match or challenge a computer opponent powered by the **Minimax algorithm**.

The game manages turns, validates moves, detects winning combinations and draws, and records match statistics. Scores and game preferences are saved in the browser using Local Storage.

## Live Application

Play the deployed version: **[Tic Tac Toe — Live Demo](https://tic-tac-toe-game-11.vercel.app/)**

## Key Features

- **Two game modes:** Play against another person or the computer.
- **Computer opponent:** Uses Minimax search to select optimal moves.
- **Win and draw detection:** Checks all eight possible winning combinations.
- **Scoreboard:** Tracks wins, draws, and total completed games.
- **Mode-specific statistics:** Keeps separate scores for two-player and computer modes.
- **Persistent statistics:** Saves the selected mode and scores with browser Local Storage.
- **Game controls:** Restart a round, change modes, play again, or reset scores.
- **Interactive interface:** Highlights the winning combination and indicates the current turn.

## How the Game Works

1. Select **Two Players** or **Play vs Computer**.
2. Take turns selecting an empty cell on the 3 × 3 board.
3. In computer mode, the opponent calculates a move after the player's turn.
4. The game checks for a win or a draw after every move.
5. The scoreboard updates when a match ends.

### Computer Decision Logic

The computer uses the Minimax algorithm to evaluate possible future board states. It scores outcomes from the computer's perspective and selects the move with the best result.

```text
Current Board
     |
     v
Generate Available Moves
     |
     v
Evaluate Possible Outcomes (Minimax)
     |
     v
Select Best-Scoring Move
     |
     v
Update Board and Check Result
```

## Technology Stack

| Technology | Role |
|---|---|
| HTML5 | Game structure and accessible controls |
| CSS3 | Visual design, layout, and interaction states |
| JavaScript (ES6) | Game state, turn handling, rules, and computer logic |
| Minimax Algorithm | Computer move evaluation |
| Browser Local Storage | Persistence of mode and match statistics |
| Git & GitHub | Version control and source hosting |
| Vercel | Deployment |

## Run Locally

No package manager or build process is required.

```bash
git clone https://github.com/mdnav/tic-tac-toe-game.git
cd tic-tac-toe-game
```

Open `index.html` in a modern web browser.

## Project Structure

```text
tic-tac-toe-game/
├── index.html    # Game markup and controls
├── style.css     # Layout, styling, and responsive presentation
├── app.js        # Game state, rules, Minimax AI, and persistence
└── README.md     # Project documentation
```

## Engineering Concepts

- State management for a turn-based application
- DOM manipulation and event-driven programming
- Array-based board representation
- Win-pattern evaluation and draw detection
- Recursive search with the Minimax algorithm
- Browser Local Storage and JSON serialization
- Input-state validation and disabled controls

## Roadmap

Potential next steps:

- Difficulty settings and alternative computer strategies
- Match history with timestamps
- Player names and configurable symbols
- Keyboard navigation and additional accessibility improvements
- Sound effects and optional visual themes

## About the Developer

**Mohammad Naveed**  
B.Tech ECE student focused on software development, Java full-stack engineering, and building practical web applications.

- **Portfolio:** [portfolio1701.vercel.app](https://portfolio1701.vercel.app/)
- **GitHub:** [github.com/mdnav](https://github.com/mdnav)
- **LinkedIn:** [linkedin.com/in/mdnav](https://www.linkedin.com/in/mdnav/)

## Contributing

Suggestions and improvements are welcome. Fork the repository, create a feature branch, commit your changes, and open a pull request.

If you find this project useful, consider giving it a ⭐.

<div align="center">

**Designed and developed by Mohammad Naveed**

</div>
