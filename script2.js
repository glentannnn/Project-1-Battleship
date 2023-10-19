const width = 10;
const playerGrid = document.querySelector("#playerBoard");
const computerGrid = document.querySelector("#computerBoard");
// const startButton = document.querySelector("#start");
let randomBoolean = Math.random() < 0.5;
let horizontal = randomBoolean;
let shipsArr = [];

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

  if (horizontal === true) {
    if (randomStartIndex <= width * width - ship.length) {
      validStartIndex = randomStartIndex;
    } else {
      validStartIndex = width * width - ship.length;
    }
  } else {
    if (randomStartIndex < width * width - width * ship.length + width) {
      validStartIndex = randomStartIndex;
    } else {
      validStartIndex = randomStartIndex - width * ship.length + width;
    }
  }

  for (let i = 0; i < ship.length; i++) {
    if (horizontal === true) {
      shipsArr.push(allMiniBlocks[validStartIndex + i]);
    } else {
      shipsArr.push(allMiniBlocks[validStartIndex + i * width]);
    }
  }
}

let valid;
if (horizontal === true) {
  shipsArr.every((_ship, index) => {
    valid = shipsArr[0].id % width !== width - (shipsArr.length - (index + 1));
  });
} else {
  shipsArr.every((_ship, index) => {
    valid = shipsArr[0].id < 90 + (width * index + 1);
  });
}

const notTaken = shipsArr.every((ship) => {
  !ship.classList.contains("taken");
});

if (valid && notTaken) {
  shipsArr.forEach((item) => {
    item.classList.add("taken", ship.name);
  });
} else {
  allocateShipPieces();
}

newShips.forEach((ship) => {
  allocateShipPieces(ship);
});
