let writingGameSelect = document.querySelector(".game-select");
let writingGame = document.querySelector(".writing-game");
let writingGamePlay = document.querySelector(".writing-game-play");
let runAgainWritingGame = document.querySelector(".writing-game .run-again");
let closeWritingGame = document.querySelector(".writing-game .close-game");

writingGamePlay.onclick = function () {
  writingGameSelect.style.display = "none";
  writingGame.style.display = "block";
};

closeWritingGame.onclick = function () {
  writingGame.style.display = "none";
  document.querySelector(".game-select").style.display = "flex";
};

/* Advices
  - Always Check The Console
  - Take Your Time To Name The Identifiers
  - DRY

  Steps To Create The Project
  [01] Create HTML Markup
  [02] Add Styling And Separate From Logic
  [03] Create The App Logic
  ---- [01] Add Levels
  ---- [02] Show Level And Seconds
  ---- [03] Add Array Of Words
  ---- [04] ِAdd Start Game Button
  ---- [05] Generate Upcoming Words
  ---- [06] Disable Copy Word And Paste Event + Focus On Input
  ---- [07] Start Play Function
  ---- [08] Start The Time And Count Score
  ---- [09] Add The Error And Success Messages
  [04] Your Trainings To Add Features
  ---- [01] Save Score To Local Storage With Date
  ---- [02] Choose Levels From Select Box
  ---- [03] Break The Logic To More Functions
  ---- [04] Choose Array Of Words For Every Level
  ---- [05] Write Game Instruction With Dynamic Values
  ---- [06] Add 3 Seconds For The First Word
*/

// Array Of Words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

// Setting Levels
const levels = {
  Easy: 8,
  Normal: 5,
  Hard: 3,
};

// Default Level
let defaultLevelName = "Easy";
let defaultLeveSeconds = levels[defaultLevelName];

// Catch Selectors
let levelNameSpan = document.querySelector(".writing-game .message .lvl");
let secondsSpan = document.querySelector(".writing-game .message .seconds");
let startButton = document.querySelector(".writing-game .start");
let theWord = document.querySelector(".writing-game .the-word");
let input = document.querySelector(".writing-game .input");
let upcomingWords = document.querySelector(".writing-game .upcoming-words");
let timeLeftSpan = document.querySelector(".writing-game .control .time span");
let scoreGot = document.querySelector(".writing-game .control .score .got");
let scoreTotal = document.querySelector(".writing-game .control .score .total");
let finishMessage = document.querySelector(".writing-game .finish");

// Setting Level Name + Seconds + Score
levelNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLeveSeconds;
timeLeftSpan.innerHTML = defaultLeveSeconds;
scoreTotal.innerHTML = words.length;

// Disable Paste Event
input.onpaste = function () {
  return false;
};

// Start Game
startButton.onclick = function () {
  this.remove();
  input.focus();
  // Generate Word Function
  generateWord();
};

function generateWord() {
  // Get Random Word From Array
  let randomWord = words[Math.floor(Math.random() * words.length)]; // Town عشوائي
  // Get Word Index
  let WordIndex = words.indexOf(randomWord); // 4 عشوائي
  // Remove Word From Array
  words.splice(WordIndex, 1);
  // Show Upcoming Words
  theWord.innerHTML = randomWord;
  // Empty Upcoming Words
  upcomingWords.innerHTML = "";
  // Generate Words
  for (let i = 0; i < words.length; i++) {
    // Create Div Element
    let div = document.createElement("div");
    let text = document.createTextNode(words[i]);
    div.appendChild(text);
    upcomingWords.appendChild(div);
  }
  // Call Start Play Function
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLeveSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      // Stop Timre
      clearInterval(start);
      // Compare Words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty Input Field
        input.value = "";
        // Increase Score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          // Call Generate Word Function
          generateWord();
        } else {
          let span = document.createElement("span");
          span.className = "good";
          let text = document.createTextNode("Gongratz");
          span.appendChild(text);
          finishMessage.appendChild(span);
          // Remove Upcoming Words Box
          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let text = document.createTextNode("Game Over");
        span.appendChild(text);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}
