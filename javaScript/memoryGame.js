document.querySelector(".control-buttons span").onclick = function () {
  let yourName = prompt("Whats Your Name?");
  if (yourName == null || yourName == "") {
    document.querySelector(".info-container .name span").innerHTML = "Unkown";
  } else {
    document.querySelector(".info-container .name span").innerHTML = yourName;
  }
  document.querySelector(".control-buttons").remove();
};

let duration = 1000;

let memoryBlocks = document.querySelector(".memory-game-blocks");

let blocks = Array.from(memoryBlocks.children);

let orderRange = [...Array(blocks.length).keys()];

// console.log(orderRange); // (20) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
shuffle(orderRange);
// console.log(orderRange); // (20) [3, 4, 11, 5, 6, 14, 15, 17, 7, 19, 0, 8, 10, 18, 16, 13, 12, 1, 2, 9]

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];

  block.addEventListener("click", function () {
    filpBlock(block);
  });
});

function filpBlock(selectedBlock) {
  selectedBlock.classList.add("is-flipped");

  let allFilppedBlcks = blocks.filter((filppedBlck) =>
    filppedBlck.classList.contains("is-flipped")
  );

  if (allFilppedBlcks.length === 2) {
    stopClicking();
    checkMatchedBlocks(allFilppedBlcks[0], allFilppedBlcks[1]);
  }
}

function stopClicking() {
  memoryBlocks.classList.add("no-clicking");

  setTimeout(() => {
    memoryBlocks.classList.remove("no-clicking");
  }, duration);
}

function checkMatchedBlocks(firstBlok, secondBlock) {
  let triesElement = document.querySelector(".tries span");

  if (firstBlok.dataset.technology === secondBlock.dataset.technology) {
    firstBlok.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    firstBlok.classList.add("has-match");
    secondBlock.classList.add("has-match");

    document.getElementById("success").play();
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

    setTimeout(() => {
      firstBlok.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);

    document.getElementById("fail").play();
  }
}

function shuffle(array) {
  let current = array.length,
    temp,
    random;

  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[random];
    array[random] = temp;
  }
  return array;
}

let memorygameSelect = document.querySelector(".game-select");
let gameMemory = document.querySelector(".memory-game");
let memoryGamePlay = document.querySelector(".memory-game-play");
let runAgainMemoryGame = document.querySelector(".memory-game .run-again");
let closeMemoryGame = document.querySelector(".memory-game .close-game");

memoryGamePlay.onclick = function () {
  memorygameSelect.style.display = "none";
  gameMemory.style.display = "block";
};

closeMemoryGame.onclick = function () {
  memorygameSelect.style.display = "flex";
  gameMemory.style.display = "none";
};

runAgainMemoryGame.onclick = function () {
  blocks.forEach((block, index) => {
    block.classList.remove("is-flipped");
    block.classList.remove("has-match");
    blocks = Array.from(memoryBlocks.children);
    orderRange = [...Array(blocks.length).keys()];
    shuffle(orderRange);
    block.style.order = orderRange[index];
    block.addEventListener("click", function () {
      filpBlock(block);
    });
  });

};
