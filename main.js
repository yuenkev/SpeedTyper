window.addEventListener("load", init);

// Globals

//Avaiable Leveles
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

//To change levels
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOMS
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "squid",
  "games",
  "javascript",
  "html",
  "bootstrap",
  "cascading",
  "style",
  "sheets",
  "scary",
  "laughter",
  "definition",
  "siblings",
  "developer",
  "Edinbrugh",
  "complained",
  "squeaked",
  "whispered",
  "whimpered",
  "murmured",
  "commented",
  "snivelled",
  "wailed",
  "bellowed",
  "smelled",
  "cried",
  "roared",
  "stammered",
  "retorted",
  "snapped",
  "exclaimed",
  "replied",
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  //start matching on word input
  wordInput.addEventListener("input", startMatch);
  //Call countdown
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick + Show Rando Word
function showWord() {
  //Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
  // Make sure time isnt 0
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }

  //Show time
  timeDisplay.innerHTML = time;
}

// Check Status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
