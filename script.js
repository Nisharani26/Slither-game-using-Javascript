//game constants and variables

let direction = { x: 0, y: 0 };
const moveSound = new Audio("move.mp3");
const foodSound = new Audio("food.mp3");
const gameOverSound = new Audio("gameOver.mp3");
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
  //Part 1 --> updating snake and food
  // if you have eaten the food ,regenerate the food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    return foodSound.play();
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a =2,b = 16;
    
  }
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
  foodElement.classList.add("food");
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
