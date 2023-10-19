const width = 10;
const playerGrid = document.querySelector("#playerBoard");
const computerGrid = document.querySelector("#computerBoard");
const computerMiniBlocks = [];
const playerMiniBlocks = [];
// const startButton = document.querySelector("#start");

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
// class shipCategory {
//   constructor(name, directions) {
//     this.name = name;
//     this.directions = directions;
//   }
// }

// const carrier = new shipCategory("carrier", [
//   [0, 1, 2, 3, 4],
//   [0, width, width * 2, width * 3, width * 4],
// ]);
// const battleship = new shipCategory("battleship", [
//   [0, 1, 2, 3],
//   [0, width, width * 2, width * 3],
// ]);
// const cruiser = new shipCategory("cruiser", [
//   [0, 1, 2],
//   [0, width, width * 2],
// ]);
// const submarine = new shipCategory("submarine", [
//   [0, 1, 2],
//   [0, width, width * 2],
// ]);
// const destroyer = new shipCategory("destroyer", [
//   [0, 1],
//   [0, width],
// ]);

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

// Automatically and randomly allocate ships to both boards.
// function allocateShipPiecesComputer(ship) {
//   const allMiniBlocks = document.querySelectorAll("#computerBoard div");
//   let randomDirection = Math.floor(Math.random() * ship.directions.length);
//   let currentDirection = ship.directions[randomDirection];
//   if (randomDirection === 0) {
//     direction = 1;
//   } else {
//     direction = 10;
//   }

//   let randomStartIndex = Math.floor(Math.random() * width * width);
//   let validStartIndex = randomStartIndex;
//   if (direction === 1) {
//     if (randomStartIndex <= width * width - ship.length) {
//       validStartIndex = randomStartIndex;
//     } else {
//       validStartIndex = width * width - ship.length;
//     }
//   } else {
//     if (randomStartIndex <= width * width - width * ship.length + width - 1) {
//       validStartIndex = randomStartIndex;
//     } else {
//       validStartIndex = randomStartIndex - width * ship.length + width;
//     }
//   }

//   const isTaken = currentDirection.some((index) => {
//     computerMiniBlocks[validStartIndex + index].classList.contains("taken");
//   });
//   const isOnRightMostColumn = currentDirection.some((index) => {
//     (validStartIndex + index) % width === width - 1;
//   });
//   const isOnLeftMostColumn = currentDirection.some((index) => {
//     (validStartIndex + index) % width === 0;
//   });

//   if (!isTaken && !isOnRightMostColumn && !isOnLeftMostColumn) {
//     currentDirection.forEach((index) => {
//       computerMiniBlocks[validStartIndex + index].classList.add(
//         "taken",
//         ship.name
//       );
//     });
//   } else {
//     allocateShipPiecesComputer(ship);
//   }
// }

// newShips.forEach((newShip) => {
//   allocateShipPiecesComputer(newShip);
// });

// // 5. use the for loop to iterate through each ship's length. To do so, we need to get the length info.
// // for (let i = 0; i < ship.length; i++) {
// //   if (horizontal === true) {
// //     shipsArr.push(allMiniBlocks[validStart + i]);
// //   } else {
// //     shipsArr.push(allMiniBlocks[validStart + i * width]);
// //   }
// // }

// // // 7. Use the forEach method to add ID of the ship's name into the HTML. The CSS styling for the ID should also be created to cater to this.
// // shipsArr.forEach((smth) => {
// //   // smth.setAttribute("id", ship.name);
// //   smth.classList.add(ship.name);
// //   smth.classList.add("taken");
// // });

// // // 9. Now, instead of calling just one ship, we shall do it for all the ships. To do so, we need an array again as we're using the forEach method.
// // newShips.forEach((newShip) => {
// //   allocateShipPiecesComputer(newShip);
// // });

// // randomise for player
// function allocateShipPiecesPlayer(ship) {
//   const allMiniBlocks = document.querySelectorAll("#playerBoard div");
//   let randomBoolean = Math.random() < 0.5;
//   let horizontal = randomBoolean;
//   let randomStartIndex = Math.floor(Math.random() * width * width);
//   console.log(randomStartIndex);

//   // 10. Validate the start, so as to prevent the errors we see if this code is not in place.

//   let validStartIndex = randomStartIndex;
//   if (horizontal === true) {
//     if (randomStartIndex <= width * width - ship.length) {
//       validStartIndex = randomStartIndex;
//     } else {
//       validStartIndex = width * width - ship.length;
//     }
//   } else {
//     if (randomStartIndex <= width * width - width * ship.length + width) {
//       validStartIndex = randomStartIndex;
//     } else {
//       validStartIndex = randomStartIndex - width * ship.length + width;
//     }
//   }

//   // 8. In order to use forEach method in step 7, we need an array. So create an empty array and push the items into here. Then from step 5, push the items into this empty array.
//   let shipsArr = [];

//   for (let i = 0; i < ship.length; i++) {
//     if (horizontal === true) {
//       shipsArr.push(allMiniBlocks[validStartIndex + i]);
//     } else {
//       shipsArr.push(allMiniBlocks[validStartIndex + i * width]);
//     }
//   }

let noOverlap;
for (let i = randomStartIndex; i < randomStartIndex + ship.length; i++) {
  let boardIndex = "#c" + i;
  if (document.querySelector(boardIndex).classList.contains("taken")) {
    noOverlap = false;
  } else {
    noOverlap = true;
  }
}

//   // for (let i = 0; i < ship.length; i++) {
//   //   if (horizontal === true) {
//   //     if (noOverlap === true) {
//   //       shipsArr.push(allMiniBlocks[validStartIndex + i]);
//   //     } else {
//   //       allocateShipPiecesPlayer(ship);
//   //     }
//   //   } else {
//   //     if (noOverlap === true) {
//   //       shipsArr.push(allMiniBlocks[validStartIndex + i * width]);
//   //     } else {
//   //       allocateShipPiecesPlayer(ship);
//   //     }
//   //   }
//   // }

//   // 7. Use the forEach method to add ID of the ship's name into the HTML. The CSS styling for the ID should also be created to cater to this.
//   shipsArr.forEach((smth) => {
//     // smth.setAttribute("id", ship.name);
//     smth.classList.add(ship.name);
//     smth.classList.add("taken");
//   });
// }

// // 9. Now, instead of calling just one ship, we shall do it for all the ships. To do so, we need an array again as we're using the forEach method.
// newShips.forEach((newShip) => {
//   allocateShipPiecesPlayer(newShip);
// });

// Automatically and randomly allocate ships to both boards.
function allocateShipPieces(ship) {
  const allMiniBlocks = document.querySelectorAll("#computerBoard div");
  let randomBoolean = Math.random() < 0.5;
  let horizontal = randomBoolean;
  let randomStartIndex = Math.floor(Math.random() * width * width);

  let validStartIndex = randomStartIndex;

  if (horizontal === true) {
    if (randomStartIndex <= width * width - ship.length) {
      validStartIndex = randomStartIndex;
    } else {
      validStartIndex = width * width - ship.length;
    }
  } else {
    if (randomStartIndex <= width * width - width * ship.length + width) {
      validStartIndex = randomStartIndex;
    } else {
      validStartIndex = randomStartIndex - width * ship.length + width;
    }
  }

  let shipsArr = [];

  for (let i = 0; i < ship.length; i++) {
    if (horizontal === true) {
      shipsArr.push(allMiniBlocks[validStartIndex + i]);
    } else {
      shipsArr.push(allMiniBlocks[validStartIndex + i * width]);
    }
  }

  // let isTaken;
  // if (horizontal === true) {
  //   if (
  //     shipsArr.some((index) => {
  //       shipsArr[index].classList.contains("taken");
  //     })
  //   ) {
  //     isTaken = true;
  //   } else {
  //     isTaken = false;
  //   }
  // } else {
  //   if (
  //     shipsArr.some((index) => {
  //       shipsArr[index].classList.contains("taken");
  //     })
  //   ) {
  //     isTaken = true;
  //   } else {
  //     isTaken = false;
  //   }
  // }

  let valid;
  if (horizontal === true) {
    if (
      shipsArr.every((_ship, index) => {
        shipsArr[0].id % width !== width - (shipsArr.length - (index + 1));
      })
    ) {
      valid = true;
    } else {
      valid = false;
    }
  } else {
    if (
      shipsArr.every((_ship, index) => {
        shipsArr[0].id < 90 + (width * index + 1);
      })
    ) {
      valid = true;
    } else {
      valid = false;
    }
  }

  const notTaken = shipsArr.every((ship) => {
    !ship.classList.contains("taken");
  });

  if (valid && notTaken) {
    shipsArr.forEach((ship) => {
      ship.classList.add("taken", ship.name);
    });
  } else {
    allocateShipPieces(ship);
  }
}

newShips.forEach((newShip) => {
  allocateShipPieces(newShip);
});
