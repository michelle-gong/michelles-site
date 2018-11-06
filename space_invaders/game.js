var hero = {
  top: 425,
  left: 350
};

var missiles = [];

var initialTomatoes = [
  { left: 150, top: 25 },
  { left: 200, top: 25 },
  { left: 250, top: 25 },
  { left: 300, top: 25 },
  { left: 350, top: 25 },
  { left: 400, top: 25 },
  { left: 450, top: 25 },
  { left: 500, top: 25 },
  { left: 550, top: 25 },
  { left: 150, top: 75 },
  { left: 200, top: 75 },
  { left: 250, top: 75 },
  { left: 300, top: 75 },
  { left: 350, top: 75 },
  { left: 400, top: 75 },
  { left: 450, top: 75 },
  { left: 500, top: 75 },
  { left: 550, top: 75 },
];

var tomatoes = [
  { left: 150, top: 25 },
  { left: 200, top: 25 },
  { left: 250, top: 25 },
  { left: 300, top: 25 },
  { left: 350, top: 25 },
  { left: 400, top: 25 },
  { left: 450, top: 25 },
  { left: 500, top: 25 },
  { left: 550, top: 25 },
  { left: 150, top: 75 },
  { left: 200, top: 75 },
  { left: 250, top: 75 },
  { left: 300, top: 75 },
  { left: 350, top: 75 },
  { left: 400, top: 75 },
  { left: 450, top: 75 },
  { left: 500, top: 75 },
  { left: 550, top: 75 },
];

var scoreCounter = 0;

var tomatoSpeed = 1;

document.onkeydown = function(e) {
  //on left key
  if (e.keyCode === 37) {
      //move left
      if (hero.left >= 30) {
        hero.left = hero.left - 30;
      }
  }
  //on right key
  if (e.keyCode === 39) {
      //move right
      if (hero.left <= 670) {
        hero.left = hero.left + 30;
      }
  }
  //on space
  if (e.keyCode === 32) {
      // fire missile
      missiles.push({
          top: hero.top - 5,
          left: hero.left + 20
      });
      drawMissile()
  }
  moveHero();
}

function moveHero() {
  document.getElementById('hero').style.left = hero.left + "px";
}

function drawMissile() {
  document.getElementById('missiles').innerHTML = ""
  for(var i = 0 ; i < missiles.length ; i++ ) {
    document.getElementById('missiles').innerHTML += `<div class='missile' style='top:${missiles[i].top}px; left:${missiles[i].left}px;'></div>`;
  }
}

function moveMissile() {
  for(var i = 0 ; i < missiles.length ; i++ ) {
    missiles[i].top = missiles[i].top - 10;
  }
}

function detectMissileOffScreen() {
  for(var i = 0 ; i < missiles.length ; i++ ) {
    if (missiles[i].top <= 0) {
      missiles.splice(i, 1);
    }
  }
}

function drawTomatoes() {
  document.getElementById('tomatoes').innerHTML = ""
  for(var i = 0 ; i < tomatoes.length ; i++ ) {
    document.getElementById('tomatoes').innerHTML += `<div class='tomato' style='top:${tomatoes[i].top}px; left:${tomatoes[i].left}px;'></div>`;
  }
}

function moveTomatoes() {
  for(var i = 0 ; i < tomatoes.length ; i++ ) {
    tomatoes[i].top = tomatoes[i].top + tomatoSpeed;
  }
}

function detectCollision() {
  for(var aTomato = 0 ; aTomato < tomatoes.length ; aTomato++ ) {
    for(var aMissile = 0 ; aMissile < missiles.length ; aMissile++ ) {
      if (
        missiles[aMissile].left >= tomatoes[aTomato].left  &&
        missiles[aMissile].left <= (tomatoes[aTomato].left + 50)  &&
        missiles[aMissile].top <= (tomatoes[aTomato].top + 50)  &&
        missiles[aMissile].top >= tomatoes[aTomato].top
      ) {
        tomatoes.splice(aTomato, 1);
        missiles.splice(aMissile, 1);
        scoreCounter++
      }
    }
  }
}

function printScore() {
  document.getElementById('score').innerHTML = `score: ${scoreCounter}`;
}

function detectInvasion() {
  for(var i = 0 ; i < tomatoes.length ; i++ ) {
    if (
      tomatoes[i].top >= (hero.top - 50)
    ) {
      document.getElementById('alert').innerHTML = "GAME OVER";
    }
  }
}

function gameLoop() {
  setTimeout(gameLoop, 0050)
  moveMissile();
  detectMissileOffScreen()
  drawMissile();
  drawTomatoes();
  moveTomatoes();
  detectCollision();
  printScore();
  detectInvasion();
}

gameLoop();
