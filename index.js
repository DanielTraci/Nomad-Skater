let startPage = document.querySelector(".startpage");
let gamePage = document.querySelector(".gamepage");
let gameOverPage = document.querySelector(".gameoverpage");

let startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "2px solid #006994";

let audioGameOver = new Audio("./audio/NWA-Fuck tha Police.mp3");
let audioGameScreen = new Audio("./audio/audioGameScreen.mp3");

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

let isGameOver = false;
let intervalId = 0;
let score = 0;
let speed = 5;
let isArrowLeft = false,
  isArrowRight = false,
  isArrowUp = false;

let finalScore = document.querySelector("#finalscore");
let skaterX = 75;
let skaterIncr = 1;
let officer1X = 950;
let officers = [{ x: 950, y: canvas.height - (officer1.height + fg.height) }];
let platform1X = 700,
  platform1Y = 300;
let platforms = [{ x: 950, y: 300 }];
let fgroundArr = [{ x: 950, y: canvas.height - fg.height }];
let coinX = 300;
let coins = [
  { x: 950, y: canvas.height - (coin.height + fg.height) },
  { x: 1300, y: canvas.height - (coin.height + fg.height) },
  { x: 1650, y: canvas.height - (coin.height + fg.height) },
];

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
    skaterY = skaterY - 10;
  }

  if (!isArrowUp && skater.height + skaterY < canvas.height - fg.height) {
    skaterY = skaterY + skaterIncr;
  }
}

function money() {
  for (let i = 0; i < coins.length; i++) {
    console.log(coins[i].x, coins[i].y);
    ctx.drawImage(coin, coins[i].x, coins[i].y);
    coins[i].x = coins[i].x - speed;
    if (
      skaterX + skater.width > coins[i].x &&
      skaterX < coins[i].x + coin.width &&
      skaterY < coins[i].y + coin.height &&
      skaterY + skater.height > coins[i].y
    ) {
      score++;
      coins[i].x = canvas.width + Math.floor(Math.random() * 800);
    }

    if (coins[i].x < 0) {
      coins[i].x = canvas.width + Math.floor(Math.random() * 800);
    }
  }
}

function police() {
  for (let i = 0; i < officers.length; i++) {
    ctx.drawImage(officer1, officers[i].x, officers[i].y);
    officers[i].x = officers[i].x - speed;
    if (
      skaterX + skater.width > officers[i].x &&
      skaterX < officers[i].x + officer1.width &&
      skaterY < officers[i].y + officer1.height &&
      skaterY + skater.height > officers[i].y
    ) {
      isGameOver = true;
    }

    if (
      officers[i].x < canvas.width / 2 &&
      officers[i].x >= canvas.width / 2 - speed
    ) {
      officers.push({
        x: canvas.width + Math.floor(Math.random() * 400),
        y: canvas.height - (officer1.height + fg.height),
      });
    }
  }
}

function platform() {
  for (let i = 0; i < platforms.length; i++) {
    ctx.drawImage(platform1, platforms[i].x, platforms[i].y);
    platforms[i].x = platforms[i].x - speed;

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
      platforms[i].x >= canvas.width / 2 - speed
    ) {
      platforms.push({
        x: canvas.width + Math.floor(Math.random() * 800),
        y: 300,
      });
    }
  }
}

function foreground() {
  ctx.drawImage(fg, 0, canvas.height - fg.height);
  for (let i = 0; i < fgroundArr.length; i++) {
    ctx.drawImage(fg, fgroundArr[i].x, fgroundArr[i].y);
    fgroundArr[i].x = fgroundArr[i].x - speed;

    if (fgroundArr[i].x < 0 && fgroundArr[i].x >= -speed) {
      fgroundArr.push({ x: 950, y: canvas.height - fg.height });
    }
  }
}

function scoringDisplay() {
  ctx.font = "25px Arial";
  ctx.fillStyle = "#cb4154";
  ctx.fillText(`Score is: ${score}`, 420, canvas.height - 470);
}

function speedLevels() {
  if (score == 150) {
    speed = 15;
  } else if (score >= 135) {
    speed = 14;
  } else if (score >= 120) {
    speed = 13;
  } else if (score >= 105) {
    speed = 12;
  } else if (score >= 90) {
    speed = 11;
  } else if (score >= 75) {
    speed = 10;
  } else if (score >= 60) {
    speed = 9;
  } else if (score >= 45) {
    speed = 8;
  } else if (score >= 30) {
    speed = 7;
  } else if (score >= 15) {
    speed = 6;
  }
}

function animate() {
  ctx.drawImage(bg, 0, 0);
  character();
  police();
  platform();
  foreground();
  money();
  speedLevels();
  scoringDisplay();

  if (isGameOver) {
    cancelAnimationFrame(intervalId);
    gameOverPage.style.display = "block";
    restartBtn.style.display = "block";
    startPage.style.display = "none";
    gamePage.style.display = "none";
    finalScore.innerHTML = `Your score is: ${score}`;
    audioGameOver.play();
    audioGameOver.volume = 0.1;
    audioGameOver.loop = true;
    audioGameScreen.pause();
  } else {
    intervalId = requestAnimationFrame(animate);
  }
}

function start() {
  startPage.style.display = "none";
  gamePage.style.display = "";
  gameOverPage.style.display = "none";
  animate();
  audioGameScreen.play();
  audioGameScreen.volume = 0.1;
  audioGameScreen.loop = true;
}

function restart() {
  isGameOver = false;
  skaterX = 75;
  skaterY = canvas.height - (skater.height + fg.height);
  officers = [{ x: 950, y: canvas.height - (officer1.height + fg.height) }];
  coins = [
    { x: 950, y: coinY },
    { x: 1300, y: coinY },
    { x: 1650, y: coinY },
  ];
  platforms = [{ x: 950, y: 300 }];
  audioGameOver.load();
  audioGameScreen.load();
  speed = 5;
  score = 0;
}

window.addEventListener("load", () => {
  startPage.style.display = "block";
  gamePage.style.display = "none";
  gameOverPage.style.display = "none";
  skaterY = canvas.height - (skater.height + fg.height);
  officer1Y = canvas.height - (officer1.height + fg.height);
  fgroundArr = [{ x: 950, y: canvas.height - fg.height }];
  coinY = canvas.height - (coin.height + fg.height);
  officers = [{ x: 950, y: canvas.height - (officer1.height + fg.height) }];
  coins = [
    { x: 950, y: coinY },
    { x: 1300, y: coinY },
    { x: 1650, y: coinY },
  ];

  startBtn.addEventListener("click", () => {
    start();
  });

  restartBtn.addEventListener("click", () => {
    restart();
    start();
  });
});
