// 1. create the grid in the player and computer board
const width = 10; // we put this here so we can change this number whenever we want to alter the games board size

function createMiniBlocksPlayer() {
  for (let i = 0; i < width * width; i++) {
    const miniBlock = document.createElement("div");
    miniBlock.id = i;
    miniBlock.classList.add("mini-block");
    document.querySelector("#playerBoard").append(miniBlock);
  }
}
createMiniBlocksPlayer();

function createMiniBlocksComputer() {
  for (let i = 0; i < width * width; i++) {
    const miniBlock = document.createElement("div");
    miniBlock.id = i;
    miniBlock.classList.add("mini-block");
    document.querySelector("#computerBoard").append(miniBlock);
  }
}
createMiniBlocksComputer();
// createMiniBlocks(computerBoard);

// create a function that flips the game pieces
const gamePiecesContainer = document.querySelector(".gamePieces");
let angle = 0;

function flipPieces() {
  const shipOptions = Array.from(gamePiecesContainer.children);
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  shipOptions.forEach((shipPieces) => {
    shipPieces.style.transform = "rotate(90deg)";
  });
}

// function to check validity
function checkPlacement() {}

// create classes and add use for the ships
class shipCategory {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}
const carrier = new shipCategory("carrier", 5);
const battleship = new shipCategory("battleship", 4);
const cruiser = new shipCategory("cruiser", 3);
const submarine = new shipCategory("submarine", 3);
const destroyer = new shipCategory("destroyer", 2);

// create a function that randomly allocates the game pieces in a board, have to incorporate the flip function here. Also have to make sure that the pieces are added in correctly.
function allocateShipPieces(ship) {
  const allMiniBlocks = document.querySelectorAll("#computerBoard div");
  let randomBoolean = Math.random() < 0.5;
  let horizontal = randomBoolean;
  let randomStartIndex = Math.floor(Math.random() * width * width);
  console.log(randomStartIndex);

  for (let i = 0; i < ship.length; i++) {
    if (horizontal === true) {
      console.log(allMiniBlocks[randomStartIndex + i]);
    } else {
      console.log(allMiniBlocks[randomStartIndex + i * width]);
    }
  }
}

allocateShipPieces(destroyer);
/* use JS classes to create ship piece? Since that is what we were taught how to use classes right, to create blueprints for modification of characters in a game etc. */
