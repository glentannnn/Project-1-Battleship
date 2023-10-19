const width = 10;
const playerGrid = document.querySelector("#playerBoard");
const computerGrid = document.querySelector("#computerBoard");
let computerBlocksArr = [];
let playerBlocksArr = [];
// const startButton = document.querySelector("#start");
// let randomBoolean = Math.random() < 0.5;
// let horizontal = randomBoolean;

// Create grid for player board.
function createMiniBlocksPlayer(grid) {
  for (let i = 0; i < width * width; i++) {
    const miniBlock = document.createElement("div");
    miniBlock.id = "p" + i;
    miniBlock.classList.add("mini-block");
    grid.append(miniBlock);
  }
}
createMiniBlocksPlayer(playerGrid);

// Create grid for computer board.
function createMiniBlocksComputer(grid) {
  for (let i = 0; i < width * width; i++) {
    const miniBlock = document.createElement("div");
    miniBlock.id = "c" + i;
    miniBlock.classList.add("mini-block");
    grid.append(miniBlock);
  }
}
createMiniBlocksComputer(computerGrid);

// Use classes to create ships.
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

const newShips = [carrier, battleship, cruiser, submarine, destroyer];
console.log(newShips);

// Automatically and randomly allocate ships to computer boards.
function allocateShipPieces(ship) {
  const allMiniBlocks = document.querySelectorAll("#computerBoard div");
  let randomStartIndex = Math.floor(Math.random() * width * width);

  let validStartIndex = randomStartIndex;

  if (randomStartIndex <= width * width - ship.length) {
    validStartIndex = randomStartIndex;
  } else {
    validStartIndex = width * width - ship.length;
  }

  let shipsArr = [];
  for (let i = 0; i < ship.length; i++) {
    shipsArr.push(allMiniBlocks[validStartIndex + i]);
  }

  let noOverlap;
  for (let i = randomStartIndex; i < randomStartIndex + ship.length; i++) {
    let boardIndex = "#c" + i;
    if (document.querySelector(boardIndex).classList.contains("taken")) {
      noOverlap = false;
    } else {
      noOverlap = true;
    }
  }
  //   let valid;
  //   if (
  //     shipsArr.every((_ship, index) => {
  //       shipsArr[0].id % width !== width - (shipsArr.length - (index + 1));
  //     })
  //   ) {
  //     valid = true;
  //   } else {
  //     valid = false;
  //   }

  //   const notTaken = shipsArr.every((index) => {
  //     !index.classList.contains("taken");
  //   });
  //   console.log(noOverlap, shipsArr);
  if (noOverlap) {
    shipsArr.forEach((item) => {
      item.classList.add("taken", ship.name);
    });
  } else {
    allocateShipPieces(ship);
  }
  //   shipsArr.forEach((smth) => {
  //     smth.classList.add(ship.name);
  //     smth.classList.add("taken");
  //   });
}
newShips.forEach((newship) => {
  allocateShipPieces(newship);
});

// Create event listener to listen to clicks on computer grid
const allComputerMiniBlocks = document.querySelectorAll(".mini-block");
allComputerMiniBlocks.addEventListener("click", (item) => {
  item.classList.add("fired");
});

function firing(e) {
  allComputerMiniBlocks.addEventListener("click", (item) => {
    item.classList.add("fired");
  });
}
