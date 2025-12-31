//game constants and variables

let direction = { x: 0, y: 0 };
const movesound = new Audio("move.mp3");
const foodsound = new Audio("food.mp3");
const gameOversound = new Audio("gameover.mp3");
let speed = 5;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
food = { x: 6, y: 7 };

//game functions
function main(ctime) {
  window.requestAnimationFrame(main);
  // console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}
function gameEngine() {
  //Part 1
  //Part 2 -- > Display  / Render snake and food
  playArea.innerHtml = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    playArea.appendChild(snakeElement);
  });

  // display food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("head");
  playArea.appendChild(foodElement);
}

//main logic behind running the game
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      console.log("Arrow Up");
      break;
    case "ArrowDown":
      console.log("Arrow Down");
      break;
    case "ArrowLeft":
      console.log("Arrow Left");
      break;
    case "ArrowRight":
      console.log("Arrow Right");
      break;
    default:
      break;
  }
});
