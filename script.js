// 1. create the grid in the player and computer board
const width = 10; // 2. we put this here so we can change this number whenever we want to alter the games board size

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

// 3. create a function that flips the game pieces
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

// 6. create classes to assist with step 5. Put the name and the length as parameters to use in step 5.
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

// 10. Create an array here, to assist with step 9.
const newShips = [carrier, battleship, cruiser, submarine, destroyer];

// 4. create a function that randomly allocates the game pieces in a board, have to incorporate the flip function here. Also have to make sure that the pieces are added in correctly.
function allocateShipPieces(ship, validityFunction) {
  const allMiniBlocks = document.querySelectorAll("#computerBoard div");
  let randomBoolean = Math.random() < 0.5;
  let horizontal = randomBoolean;
  let randomStartIndex = Math.floor(Math.random() * width * width);
  console.log(randomStartIndex);

  // 10. Validate the start, so as to prevent the errors we see if this code is not in place.

  let validStart = randomStartIndex;

  if (horizontal === true) {
    if (randomStartIndex <= width * width - ship.length) {
      validStart = randomStartIndex;
    } else {
      validStart = width * width - ship.length;
    }
  } else {
    if (randomStartIndex <= width * width - width * ship.length + width) {
      // put in the necessary parenthesis and try it out, this works.
      validStart = randomStartIndex;
    } else {
      validStart = randomStartIndex - width * ship.length + width;
    }
  }

  // 8. In order to use forEach method in step 7, we need an array. So create an empty array and push the items into here. Then from step 5, push the items into this empty array.
  let shipsArr = [];

  // 5. use the for loop to iterate through each ship's length. To do so, we need to get the length info.
  for (let i = 0; i < ship.length; i++) {
    if (horizontal === true) {
      shipsArr.push(allMiniBlocks[validStart + i]);
    } else {
      shipsArr.push(allMiniBlocks[validStart + i * width]);
    }
  }

  // console.log(shipsArr);

  // 7. Use the forEach method to add ID of the ship's name into the HTML. The CSS styling for the ID should also be created to cater to this.
  shipsArr.forEach((smth) => {
    smth.setAttribute("id", ship.name);
    smth.classList.add("taken");
  });
}

//  allocateShipPieces(destroyer);

// 9. Now, instead of calling just one ship, we shall do it for all the ships. To do so, we need an array again as we're using the forEach method.
newShips.forEach((newShip) => {
  allocateShipPieces(newShip);
});

/* use JS classes to create ship piece? Since that is what we were taught how to use classes right, to create blueprints for modification of characters in a game etc. */
