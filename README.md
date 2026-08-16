# ❌⭕ Tic Tac Toe

### A polished, responsive browser game built with HTML, CSS & JavaScript

A modern **Tic Tac Toe web application** designed around interactive gameplay, clean UI, and practical JavaScript engineering.

The application supports **Two Player** and **Single Player** modes, real-time game-state management, winner and draw detection, score tracking, game controls, and responsive gameplay across devices.

<p align="center">

<a href="https://tic-tac-toe-game-11.vercel.app/">
<img src="https://img.shields.io/badge/🎮%20LIVE%20DEMO-PLAY%20NOW-0A7A4B?style=for-the-badge" alt="Live Demo">
</a>

<a href="https://github.com/mohammadnaveed1701-source/tic-tac-toe-game">
<img src="https://img.shields.io/badge/💻%20SOURCE%20CODE-GITHUB-181717?style=for-the-badge&logo=github" alt="Source Code">
</a>

</p>

---

## 🎮 Experience the Game

### 👥 Two Player Mode

Play locally with another player on the same device.

### 🤖 Single Player Mode

Challenge the computer-controlled opponent in a solo match.

### 📊 Match Tracking

Keep track of:

* ❌ X Wins
* ⭕ O Wins
* 🤝 Draws
* 🎮 Total Games

### 🔄 Complete Game Controls

* Restart the current game
* Change game mode
* Reset match statistics
* Start a new game after completion

---

# 📸 Preview

<p align="center">
  <img src="YOUR_SCREENSHOT_URL_HERE" alt="Tic Tac Toe Game Preview" width="850">
</p>

> Replace the image above with a screenshot or GIF from the deployed application.

---

# 💡 What I Built

This project goes beyond rendering a 3×3 board.

I built the application around a complete game lifecycle:

```text
User Action
     ↓
Validate Move
     ↓
Update Game State
     ↓
Update Interface
     ↓
Check Winning Conditions
     ↓
Check Draw Condition
     ↓
Update Score
     ↓
Continue / End Game
```

In **Single Player Mode**, the application also manages the computer's turn before returning control to the player.

---

# 🧠 Game Logic

After every valid move, the application evaluates the board against the possible winning patterns.

```text
Rows

[0, 1, 2]
[3, 4, 5]
[6, 7, 8]


Columns

[0, 3, 6]
[1, 4, 7]
[2, 5, 8]


Diagonals

[0, 4, 8]
[2, 4, 6]
```

The game then determines whether the current state represents:

```text
              GAME STATE
                   │
          ┌────────┼────────┐
          ▼        ▼        ▼
        WIN      DRAW    CONTINUE
          │        │        │
          ▼        ▼        ▼
       Update    Update    Switch
       Score     Draws     Player
```

This keeps the gameplay flow predictable and prevents invalid interactions after a match has finished.

---

# 🛠️ Technology Stack

| Technology         | Role                                  |
| ------------------ | ------------------------------------- |
| **HTML5**          | Application structure                 |
| **CSS3**           | UI styling, layout and responsiveness |
| **JavaScript ES6** | Game logic, state and interactions    |
| **Git**            | Version control                       |
| **GitHub**         | Source code management                |
| **Vercel**         | Production deployment                 |

---

# ⚙️ Engineering Concepts

### JavaScript

* DOM Manipulation
* Event Handling
* State Management
* Functions
* Arrays
* Loops
* Conditional Logic
* Dynamic UI Updates

### Game Engineering

* Turn Management
* Move Validation
* Winner Detection
* Draw Detection
* Game Lifecycle Management
* Score Management
* Computer-Controlled Gameplay

### Frontend Engineering

* Responsive Web Design
* Interactive UI
* User Feedback
* Event-Driven Programming
* Browser Application Development

---

# 📱 Responsive by Design

The interface is designed to work across different screen sizes:

**Desktop · Laptop · Tablet · Mobile**

The game board, controls, score information, and interactions adapt to smaller screens while maintaining usability.

---

# 📂 Project Structure

```text
tic-tac-toe-game/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

# 🎯 Key Takeaways

Building this project strengthened my understanding of how JavaScript can be used to create a complete interactive application rather than a static webpage.

### I practiced:

* Managing application state
* Designing event-driven interactions
* Implementing game algorithms
* Updating the DOM dynamically
* Handling multiple application states
* Creating responsive interfaces
* Building reusable game controls
* Deploying a production frontend

---

# 🚀 Deployment

The application is deployed and publicly accessible through Vercel.

### 🎮 Live Application

**[tic-tac-toe-game-11.vercel.app](https://tic-tac-toe-game-11.vercel.app/)**

---

# 🔮 Roadmap

Potential future improvements:

* 🧠 More advanced computer strategy
* 🎚️ Multiple difficulty levels
* 🌐 Online multiplayer
* 🏆 Global leaderboard
* 📊 Match history
* 👤 Player profiles
* 🎨 Custom themes
* 🔊 Sound effects
* 🏅 Achievement system

---

# 👨‍💻 About the Developer

## Mohammad Naveed

B.Tech ECE student focused on building **backend systems, automation workflows, and scalable web applications**.

Currently working with:

**Java · Spring Boot · React · SQL · REST APIs · Git · Cloud Technologies**

This project represents part of my progression from **frontend fundamentals toward full-stack and backend engineering**.

### Connect

🌐 **Portfolio**
https://portfolio1701.vercel.app/

💼 **LinkedIn**
https://www.linkedin.com/in/mdnav/

🐙 **GitHub**
https://github.com/mdnav

---

<p align="center">

### ⭐ If you enjoyed the project, consider starring the repository.

**Built with HTML, CSS & JavaScript**

**Mohammad Naveed**

</p>

