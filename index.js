let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "2px solid #006994";
let gameOverMusic = new Audio("./audio/NWA-Fuck tha Police.mp3"); //url goes here

///DONE - IMAGES ///
let bg = new Image();
bg.src = "./images/bg-img.jpg";

let fg = new Image();
fg.src = "./images/fg-img.jpg";

let platform1 = new Image();
platform1.src = "./images/platform1-img.jpg";

let officer1 = new Image();
officer1.src = "./images/officer1-img.png";

let skater = new Image();
skater.src = "./images/skater-img.png";

let coin = new Image();
coin.src = "./images/coin-img.png";

///DONE - The DOM of the start and the restart buttons ///
let startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");

/// GAME Status QUO ///
let isGameOver = false;
let intervalId = 0;
let score = 0;
let isArrowLeft = false,
  isArrowRight = false,
  isArrowUp = false;
//let lives = 3;

// skater position
let skaterX = 75,
  skaterY = canvas.height - (skater.height + fg.height);
let skaterIncr = 1;

// officer1 position
let officer1X = 950,
  officer1Y = canvas.height - (officer1.height + fg.height);
let officers = [{ x: 950, y: canvas.height - (officer1.height + fg.height) }];

// platform position
let platform1X = 700,
  platform1Y = 300;
let platforms = [{ x: 950, y: 300 }];

// foreground
let fgroundArr = [{ x: 950, y: canvas.height - fg.height }];

// coins
let coinX = 300,
  coinY = canvas.height - (coin.height + fg.height);
let coins = [{ x: 950, y: canvas.height - fg.height }];

document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowRight") {
    isArrowRight = true;
    isArrowLeft = false;
    isArrowUp = false;
  } else if (event.code == "ArrowLeft") {
    isArrowLeft = true;
    isArrowRight = false;
    isArrowUp = false;
  } else if (event.code == "ArrowUp") {
    isArrowUp = true;
    skaterIncr = -10;
    isArrowRight = false;
    isArrowLeft = false;
  }
});

document.addEventListener("keyup", () => {
  isArrowRight = false;
  isArrowLeft = false;
  isArrowUp = false;
  skaterIncr = 10;
});

function character() {
  ctx.drawImage(skater, skaterX, skaterY);

  if (isArrowRight && skaterX + skater.width < canvas.width) {
    skaterX = skaterX + 10;
  }
  if (isArrowLeft && skaterX > 0) {
    skaterX = skaterX - 10;
  }
  if (isArrowUp && skaterY > 0) {
    console.log(skaterY, skater.height);
    skaterY = skaterY - 10;
  }

  if (!isArrowUp && skater.height + skaterY < canvas.height - fg.height) {
    skaterY = skaterY + skaterIncr;
  }
}

function money() {
  for (let i = 0; i < coins.length; i++) {
    ctx.drawImage(coin, coins[i].x, coins[i].y);
    coins[i].x = coins[i].x - 5;

    if (
      skaterX + skater.width > coins[i].x &&
      skaterX < coins[i].x + coin.width &&
      skaterY < coins[i].y + coin.height &&
      skaterY + skater.height > coins[i].y
    ) {
      score++;
    }

    if (coins[i].x < canvas.width / 2 && coins[i].x >= canvas.width / 2 - 5) {
      coins.push({
        x: canvas.width + Math.floor(Math.random() * 600),
        y: coinY,
      });
    }
  }
}

function police() {
  for (let i = 0; i < officers.length; i++) {
    ctx.drawImage(officer1, officers[i].x, officers[i].y);
    officers[i].x = officers[i].x - 5;
    /*if (
      skaterX + skater.width > officers[i].x &&
      skaterX < officers[i].x + officer1.width &&
      skaterY < officers[i].y + officer1.height &&
      skaterY + skater.height > officers[i].y
    ) {
      isGameOver = true;
    }*/

    if (
      officers[i].x < canvas.width / 2 &&
      officers[i].x >= canvas.width / 2 - 5
    ) {
      officers.push({
        x: canvas.width + Math.floor(Math.random() * 600),
        y: canvas.height - (officer1.height + fg.height),
      });
    }
  }
}

function platform() {
  for (let i = 0; i < platforms.length; i++) {
    ctx.drawImage(platform1, platforms[i].x, platforms[i].y);
    platforms[i].x = platforms[i].x - 5;

    if (
      skaterX + skater.width > platforms[i].x &&
      skaterX < platforms[i].x + platform1.width &&
      skaterY < platforms[i].y + platform1.height &&
      skaterY + skater.height > platforms[i].y
    ) {
      skaterY = platform1Y - skater.height;
    }

    if (
      platforms[i].x < canvas.width / 2 &&
      platforms[i].x >= canvas.width / 2 - 5
    ) {
      platforms.push({
        x: canvas.width + Math.floor(Math.random() * 600),
        y: 300,
      });
    }
  }
}

function foreground() {
  ctx.drawImage(fg, 0, canvas.height - fg.height);
  for (let i = 0; i < fgroundArr.length; i++) {
    ctx.drawImage(fg, fgroundArr[i].x, fgroundArr[i].y);
    fgroundArr[i].x = fgroundArr[i].x - 5;
    if (fgroundArr[i].x == 0) {
      fgroundArr.push({ x: 950, y: canvas.height - fg.height });
    }
  }
}

function scoringDisplay() {
  ctx.fillStyle = "#cb4154";
  ctx.font = "25px Arial";
  ctx.fillText(`Score is: ${score}`, 420, canvas.height - 470);
}

function animate() {
  ctx.drawImage(bg, 0, 0);
  character();
  police();
  platform();
  money();
  scoringDisplay();
  foreground();

  if (isGameOver) {
    cancelAnimationFrame(intervalId);
    canvas.style.display = "none";
    restartBtn.style.display = "block";
  } else {
    intervalId = requestAnimationFrame(animate);
  }
}

function start() {
  canvas.style.display = "block";
  startBtn.style.display = "none";
  restartBtn.style.display = "none";
  animate();
}

function restart() {
  isGameOver = false;
  skaterX = 75;
  skaterY = canvas.height - (skater.height + fg.height);
  start();
}

window.addEventListener("load", () => {
  canvas.style.display = "none";
  restartBtn.style.display = "none";
  start();

  startBtn.addEventListener("click", () => {
    start();
  });

  restartBtn.addEventListener("click", () => {
    restart();
  });
});
