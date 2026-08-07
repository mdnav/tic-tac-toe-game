const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const turnIndicator = document.querySelector("#turn-indicator");
const playAgainBtn = document.querySelector("#play-again");
const modePanel = document.querySelector("#mode-panel");
const gameShell = document.querySelector("#game-shell");
const twoPlayerBtn = document.querySelector("#two-player-btn");
const computerBtn = document.querySelector("#computer-btn");
const scoreXLabel = document.querySelector("#score-x-label");
const scoreOLabel = document.querySelector("#score-o-label");
const scoreDrawLabel = document.querySelector("#score-draw-label");
const scoreX = document.querySelector("#score-x");
const scoreO = document.querySelector("#score-o");
const scoreDraws = document.querySelector("#score-draws");
const totalGames = document.querySelector("#total-games");

const STORAGE_KEY = "ticTacToeGameState";
const GAME_MODES = {
  TWO_PLAYER: "two-player",
  COMPUTER: "computer",
};

const defaultScores = () => ({
  [GAME_MODES.TWO_PLAYER]: { x: 0, o: 0, draws: 0 },
  [GAME_MODES.COMPUTER]: { x: 0, o: 0, draws: 0 },
});

let state = {
  mode: null,
  board: Array(9).fill(""),
  currentTurn: "X",
  isGameActive: false,
  isAiThinking: false,
  aiTimer: null,
  scores: defaultScores(),
  totalGames: 0,
};

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const loadState = () => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) return;

  try {
    const parsed = JSON.parse(stored);

    if (parsed && parsed.mode) state.mode = parsed.mode;

    if (parsed && parsed.scores) {
      state.scores = {
        ...defaultScores(),
        ...parsed.scores,
      };
    }

    if (typeof parsed.totalGames === "number") {
      state.totalGames = parsed.totalGames;
    }
  } catch (error) {
    console.warn("Unable to read saved game state.", error);
  }
};

const saveState = () => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      mode: state.mode,
      scores: state.scores,
      totalGames: state.totalGames,
    })
  );
};

const getCurrentScores = () => state.scores[state.mode] || state.scores[GAME_MODES.TWO_PLAYER];

const clearAiTimer = () => {
  if (state.aiTimer) {
    clearTimeout(state.aiTimer);
    state.aiTimer = null;
  }

  state.isAiThinking = false;
};

const updateModeButtons = () => {
  [twoPlayerBtn, computerBtn].forEach((button) => {
    if (!button) return;
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
};

const updateScoreboard = () => {
  if (!state.mode) return;

  const scores = getCurrentScores();
  const isComputerMode = state.mode === GAME_MODES.COMPUTER;

  scoreXLabel.innerText = isComputerMode ? "Player Wins" : "X Wins";
  scoreOLabel.innerText = isComputerMode ? "Computer Wins" : "O Wins";
  scoreDrawLabel.innerText = "Draws";
  scoreX.innerText = scores.x;
  scoreO.innerText = scores.o;
  scoreDraws.innerText = scores.draws;
  totalGames.innerText = state.totalGames;
};

const updateBoxesState = () => {
  boxes.forEach((box, index) => {
    const isFilled = state.board[index] !== "";
    const shouldDisable =
      isFilled ||
      !state.isGameActive ||
      state.isAiThinking ||
      (state.mode === GAME_MODES.COMPUTER && state.currentTurn === "O");

    box.disabled = shouldDisable;
  });
};

const renderBoard = () => {
  boxes.forEach((box, index) => {
    const value = state.board[index];
    box.innerText = value;
    box.classList.toggle("x", value === "X");
    box.classList.toggle("o", value === "O");
    box.classList.remove("win");
  });

  updateBoxesState();
};

const getWinner = (boardValues) => {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    let valA = boardValues[a];
    let valB = boardValues[b];
    let valC = boardValues[c];

    if (valA !== "" && valA === valB && valB === valC) {
      return { winner: valA, pattern };
    }
  }

  return null;
};

const isDraw = (boardValues) => boardValues.every((value) => value !== "");

const getWinnerLabel = (winner) => {
  if (state.mode === GAME_MODES.COMPUTER) {
    return winner === "X" ? "Player" : "Computer";
  }

  return winner;
};

const recordWinner = (winner) => {
  const scores = getCurrentScores();

  if (winner === "X") {
    scores.x += 1;
  } else {
    scores.o += 1;
  }
};

const finalizeGame = (messageText) => {
  state.isGameActive = false;
  state.totalGames += 1;
  msg.innerText = messageText;
  msgContainer.classList.remove("hide");
  updateScoreboard();
  saveState();
  updateBoxesState();
};

const showWinner = (winner, pattern) => {
  pattern.forEach((i) => boxes[i].classList.add("win"));
  recordWinner(winner);
  finalizeGame(`Congratulations — ${getWinnerLabel(winner)} wins!`);
};

const gameDraw = () => {
  const scores = getCurrentScores();
  scores.draws += 1;
  finalizeGame("Game was a draw.");
};

const checkWinner = () => {
  const result = getWinner(state.board);

  if (result) {
    showWinner(result.winner, result.pattern);
    return true;
  }

  return false;
};

const handleEndState = () => {
  if (checkWinner()) return true;

  if (isDraw(state.board)) {
    gameDraw();
    return true;
  }

  return false;
};

const setMove = (index, symbol) => {
  if (state.board[index] !== "") return false;

  state.board[index] = symbol;
  boxes[index].innerText = symbol;
  boxes[index].classList.add(symbol === "X" ? "x" : "o");
  boxes[index].disabled = true;
  return true;
};

const makeMove = (index, symbol) => {
  if (!setMove(index, symbol)) return false;

  updateBoxesState();
  return true;
};

const nextTurn = () => {
  state.currentTurn = state.currentTurn === "X" ? "O" : "X";
  turnIndicator.innerText = state.currentTurn;
};

const minimax = (board, depth, isMaximizing) => {
  const result = getWinner(board);

  if (result) {
    if (result.winner === "O") return 10 - depth;
    if (result.winner === "X") return depth - 10;
  }

  if (isDraw(board)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;

    for (let i = 0; i < board.length; i += 1) {
      if (board[i] !== "") continue;

      board[i] = "O";
      bestScore = Math.max(bestScore, minimax(board, depth + 1, false));
      board[i] = "";
    }

    return bestScore;
  }

  let bestScore = Infinity;

  for (let i = 0; i < board.length; i += 1) {
    if (board[i] !== "") continue;

    board[i] = "X";
    bestScore = Math.min(bestScore, minimax(board, depth + 1, true));
    board[i] = "";
  }

  return bestScore;
};

const getBestMove = (board) => {
  let bestScore = -Infinity;
  let bestMove = null;

  for (let i = 0; i < board.length; i += 1) {
    if (board[i] !== "") continue;

    board[i] = "O";
    const score = minimax(board, 0, false);
    board[i] = "";

    if (score > bestScore) {
      bestScore = score;
      bestMove = i;
    }
  }

  return bestMove;
};

const scheduleComputerMove = () => {
  clearAiTimer();
  state.isAiThinking = true;
  updateBoxesState();

  state.aiTimer = setTimeout(() => {
    state.aiTimer = null;

    if (!state.isGameActive || state.currentTurn !== "O") {
      state.isAiThinking = false;
      updateBoxesState();
      return;
    }

    const move = getBestMove(state.board.slice());

    if (move === null || !makeMove(move, "O")) {
      state.isAiThinking = false;
      updateBoxesState();
      return;
    }

    state.isAiThinking = false;

    if (handleEndState()) return;

    state.currentTurn = "X";
    turnIndicator.innerText = "X";
    updateBoxesState();
    saveState();
  }, 600);
};

const startGame = (mode) => {
  clearAiTimer();
  state.mode = mode;
  state.board = Array(9).fill("");
  state.currentTurn = "X";
  state.isGameActive = true;
  state.isAiThinking = false;

  modePanel.classList.add("hide");
  gameShell.classList.remove("hide");
  msgContainer.classList.add("hide");

  renderBoard();
  updateModeButtons();
  updateScoreboard();
  turnIndicator.innerText = "X";
  saveState();
};

const openModePicker = () => {
  clearAiTimer();
  state.isGameActive = false;
  msgContainer.classList.add("hide");
  gameShell.classList.add("hide");
  modePanel.classList.remove("hide");
  updateModeButtons();
  updateScoreboard();
};

const resetBoard = () => {
  if (!state.mode) return;

  clearAiTimer();
  state.board = Array(9).fill("");
  state.currentTurn = "X";
  state.isGameActive = true;
  state.isAiThinking = false;
  msgContainer.classList.add("hide");
  turnIndicator.innerText = "X";

  renderBoard();
  saveState();
};

boxes.forEach((box, idx) => {
  box.addEventListener("click", () => {
    if (!state.isGameActive || state.board[idx] !== "" || state.isAiThinking) return;
    if (state.mode === GAME_MODES.COMPUTER && state.currentTurn !== "X") return;

    if (!makeMove(idx, state.currentTurn)) return;

    if (handleEndState()) return;

    nextTurn();

    if (state.mode === GAME_MODES.COMPUTER) {
      scheduleComputerMove();
      return;
    }

    updateBoxesState();
    saveState();
  });
});

const initGame = () => {
  loadState();
  updateModeButtons();
  updateScoreboard();
  openModePicker();
};

if (newGameBtn) newGameBtn.addEventListener("click", resetBoard);
if (resetBtn) resetBtn.addEventListener("click", openModePicker);
if (playAgainBtn) playAgainBtn.addEventListener("click", resetBoard);
if (twoPlayerBtn) twoPlayerBtn.addEventListener("click", () => startGame(GAME_MODES.TWO_PLAYER));
if (computerBtn) computerBtn.addEventListener("click", () => startGame(GAME_MODES.COMPUTER));

initGame();