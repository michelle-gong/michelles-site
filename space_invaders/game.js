var hero = {
  top: 425,
  left: 350
};

var missiles = [];

var enemyMissiles = [];

var initializeTomatoes = [
  { left: 150, top: -150 },
  { left: 200, top: -150 },
  { left: 250, top: -150 },
  { left: 300, top: -150 },
  { left: 350, top: -150 },
  { left: 400, top: -150 },
  { left: 450, top: -150 },
  { left: 500, top: -150 },
  { left: 550, top: -150 },
  { left: 150, top: -100 },
  { left: 200, top: -100 },
  { left: 250, top: -100 },
  { left: 300, top: -100 },
  { left: 350, top: -100 },
  { left: 400, top: -100 },
  { left: 450, top: -100 },
  { left: 500, top: -100 },
  { left: 550, top: -100 },
  { left: 150, top: -50 },
  { left: 200, top: -50 },
  { left: 250, top: -50 },
  { left: 300, top: -50 },
  { left: 350, top: -50 },
  { left: 400, top: -50 },
  { left: 450, top: -50 },
  { left: 500, top: -50 },
  { left: 550, top: -50 },
];

var tomatoes = [
  { left: 150, top: -150 },
  { left: 200, top: -150 },
  { left: 250, top: -150 },
  { left: 300, top: -150 },
  { left: 350, top: -150 },
  { left: 400, top: -150 },
  { left: 450, top: -150 },
  { left: 500, top: -150 },
  { left: 550, top: -150 },
  { left: 150, top: -100 },
  { left: 200, top: -100 },
  { left: 250, top: -100 },
  { left: 300, top: -100 },
  { left: 350, top: -100 },
  { left: 400, top: -100 },
  { left: 450, top: -100 },
  { left: 500, top: -100 },
  { left: 550, top: -100 },
  { left: 150, top: -50 },
  { left: 200, top: -50 },
  { left: 250, top: -50 },
  { left: 300, top: -50 },
  { left: 350, top: -50 },
  { left: 400, top: -50 },
  { left: 450, top: -50 },
  { left: 500, top: -50 },
  { left: 550, top: -50 },
];

var persimmons = [
  { left: 150, top: -150 },
  { left: 200, top: -150 },
  { left: 250, top: -150 },
  { left: 300, top: -150 },
  { left: 350, top: -150 },
  { left: 400, top: -150 },
  { left: 450, top: -150 },
  { left: 500, top: -150 },
  { left: 550, top: -150 },
  { left: 150, top: -100 },
  { left: 200, top: -100 },
  { left: 250, top: -100 },
  { left: 300, top: -100 },
  { left: 350, top: -100 },
  { left: 400, top: -100 },
  { left: 450, top: -100 },
  { left: 500, top: -100 },
  { left: 550, top: -100 },
  { left: 150, top: -50 },
  { left: 200, top: -50 },
  { left: 250, top: -50 },
  { left: 300, top: -50 },
  { left: 350, top: -50 },
  { left: 400, top: -50 },
  { left: 450, top: -50 },
  { left: 500, top: -50 },
  { left: 550, top: -50 },
];

var turnips = [
  { left: 150, top: -150 },
  { left: 200, top: -150 },
  { left: 250, top: -150 },
  { left: 300, top: -150 },
  { left: 350, top: -150 },
  { left: 400, top: -150 },
  { left: 450, top: -150 },
  { left: 500, top: -150 },
  { left: 550, top: -150 },
  { left: 150, top: -100 },
  { left: 200, top: -100 },
  { left: 250, top: -100 },
  { left: 300, top: -100 },
  { left: 350, top: -100 },
  { left: 400, top: -100 },
  { left: 450, top: -100 },
  { left: 500, top: -100 },
  { left: 550, top: -100 },
  { left: 150, top: -50 },
  { left: 200, top: -50 },
  { left: 250, top: -50 },
  { left: 300, top: -50 },
  { left: 350, top: -50 },
  { left: 400, top: -50 },
  { left: 450, top: -50 },
  { left: 500, top: -50 },
  { left: 550, top: -50 },
];

var ella = [
  { left: 150, top: -350 }
];

var scoreCounter = 0;

var tomatoSpeed = 0.5;

var exploded = 0;

var hasBeenHit = false;

var waveCounter = 1;

var shootProbability = 99.95;

var invaded = false;

var missileSpeed = 10;

document.onkeydown = function(e) {
  //on left key
  if (e.keyCode === 37 && hasBeenHit === false) {
      //move left
      if (hero.left >= 30) {
        hero.left = hero.left - 30;
        document.getElementById('hero').innerHTML = "<img src='../images/hero-kun_left.png'>";
      }
  }
  //on right key
  if (e.keyCode === 39 && hasBeenHit === false) {
      //move right
      if (hero.left <= 670) {
        hero.left = hero.left + 30;
        document.getElementById('hero').innerHTML = "<img src='../images/hero-kun_right.png'>";
      }
  }
  //on space
  if (e.keyCode === 32 && hasBeenHit === false && invaded === false) {
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
  for(var i = 0 ; i < enemyMissiles.length ; i++ ) {
    document.getElementById('missiles').innerHTML += `<div class='enemymissile' style='top:${enemyMissiles[i].top}px; left:${enemyMissiles[i].left}px;'></div>`;
  }
}

function moveMissile() {
  for(var i = 0 ; i < missiles.length ; i++ ) {
    missiles[i].top = missiles[i].top - missileSpeed;
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
    if (waveCounter === 1) {
      document.getElementById('tomatoes').innerHTML += `<div class='tomato' style='top:${tomatoes[i].top}px; left:${tomatoes[i].left}px;'><img src='../images/tomato-san.png'></div>`;
    }
    if (waveCounter === 2) {
      document.getElementById('tomatoes').innerHTML += `<div class='tomato' style='top:${tomatoes[i].top}px; left:${tomatoes[i].left}px;'><img src='../images/persimmon-senpai.png'></div>`;
    }
    if (waveCounter === 3) {
      document.getElementById('tomatoes').innerHTML += `<div class='tomato' style='top:${tomatoes[i].top}px; left:${tomatoes[i].left}px;'><img src='../images/turnip-chan.png'></div>`;
    }
    if (waveCounter === 4) {
      document.getElementById('tomatoes').innerHTML += `<div class='ella' style='top:${tomatoes[i].top}px; left:${tomatoes[i].left}px;'><img src='../images/ella.png'></div>`;
    }
  }
}

function moveTomatoes() {
  for(var i = 0 ; i < tomatoes.length ; i++ ) {
    tomatoes[i].top = tomatoes[i].top + tomatoSpeed;
  }
}

function detectTomatoOffScreen() {
  for(var i = 0 ; i < tomatoes.length ; i++ ) {
    if (tomatoes[i].top >= 450) {
      tomatoes.splice(i, 1);
    }
  }
}

function detectCollision() {
  for(var aTomato = 0 ; aTomato < tomatoes.length ; aTomato++ ) {
    for(var aMissile = 0 ; aMissile < missiles.length ; aMissile++ ) {
      if (waveCounter < 4) {
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
      } else if (waveCounter === 4){
        if (
          missiles[aMissile].left >= tomatoes[aTomato].left  &&
          missiles[aMissile].left <= (tomatoes[aTomato].left + 450)  &&
          missiles[aMissile].top <= (tomatoes[aTomato].top + 350)  &&
          missiles[aMissile].top >= tomatoes[aTomato].top
        ) {
          missiles.splice(aMissile, 1);
          scoreCounter++
        }
      }
    }
  }
}

function detectMissileCollision() {
  for(var x = 0 ; x < enemyMissiles.length ; x++ ) {
    for(var y = 0 ; y < missiles.length ; y++ ) {
      if (
        missiles[y].left >= (enemyMissiles[x].left  - 9) &&
        missiles[y].left <= (enemyMissiles[x].left + 9)  &&
        missiles[y].top <= (enemyMissiles[x].top - 10)
      ) {
        console.log ('hit emeny missile!!')
        enemyMissiles.splice(x, 1);
        missiles.splice(y, 1);
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
      tomatoes[i].top >= (hero.top - 50) &&
      exploded >= 1
    ) {
      invaded = true;
      document.getElementById('alert').innerHTML = "INVADED AND EXPLODED! :( </br> <a href='../index.html'>go back home</a> </br> <a href='game.html'>play again</a>";
    } else if (
      tomatoes[i].top >= (hero.top - 50) &&
      exploded === 0
    ) {
      invaded = true;
      document.getElementById('alert').innerHTML = "YOU HAVE BEEN INVADED :( </br> <a href='../index.html'>go back home</a> </br> <a href='game.html'>play again</a>";
    }
  }
}

function makeEnemyMissile() {
  for (var i = 0 ; i < tomatoes.length ; i++ ) {
    if ((100 * Math.random()) > shootProbability) {
      console.log('a tomato shot you! :(')
      if (waveCounter === 4) {
        enemyMissiles.push ({
          top: tomatoes[i].top + 350,
          left: tomatoes[i].left + (450 * Math.random())
        });
      } else {
        enemyMissiles.push ({
          top: tomatoes[i].top + 50,
          left: tomatoes[i].left + 20
        });
      }
    }
  }
}

function moveEnemyMissile() {
  for(var i = 0 ; i < enemyMissiles.length ; i++ ) {
    enemyMissiles[i].top = enemyMissiles[i].top + 5;
  }
}

function drawEnemyMissile() {
  document.getElementById('enemymissiles').innerHTML = ""
  for(var i = 0 ; i < enemyMissiles.length ; i++ ) {
    document.getElementById('enemymissiles').innerHTML += `<div class='missile' style='top:${enemyMissiles[i].top}px; left:${enemyMissiles[i].left}px;'></div>`;
  }
}

function detectEnemyMissileOffScreen() {
  for(var i = 0 ; i < enemyMissiles.length ; i++ ) {
    if (enemyMissiles[i].top >= 490) {
      enemyMissiles.splice(i, 1);
    }
  }
}

function detectDamage() {
  for(var i = 0 ; i < enemyMissiles.length ; i++ ) {
    if (
      enemyMissiles[i].left >= hero.left  &&
      enemyMissiles[i].left <= hero.left + 50  &&
      enemyMissiles[i].top <= hero.top + 50  &&
      enemyMissiles[i].top >= hero.top
    ) {
      console.log("ohno!!!");
      exploded++;
      hasBeenHit = true;
      document.getElementById('hero').innerHTML = "";
      document.getElementById('alert').innerHTML = "YOUR SHIP EXPLODED :( </br> <a href='../index.html'>go back home</a> </br> <a href='game.html'>play again</a>";
    }
  }
}

function addWave() {
  if (tomatoes.length === 0 && waveCounter === 1) {
    tomatoes = persimmons;
    tomatoSpeed++;
    waveCounter++;
    shootProbability = 99.93;
    missileSpeed = 15;
  } else if (tomatoes.length === 0 && waveCounter === 2) {
    console.log ('it worked!')
    tomatoes = turnips;
    tomatoSpeed++;
    waveCounter++;
    shootProbability = 99.92;
    missileSpeed = 20;
  } else if (tomatoes.length === 0 && waveCounter === 3) {
    console.log ('it worked!')
    tomatoes = ella;
    tomatoSpeed = 0.5;
    waveCounter++;
    shootProbability = 80;
    missileSpeed = 25;
  }
}

function gameLoop() {
  setTimeout(gameLoop, 0050)
  drawMissile();
  moveMissile();
  detectMissileOffScreen();
  drawTomatoes();
  moveTomatoes();
  detectTomatoOffScreen()
  detectCollision();
  detectMissileCollision()
  printScore();
  detectInvasion();
  makeEnemyMissile();
  moveEnemyMissile();
  detectEnemyMissileOffScreen();
  detectDamage();
  addWave();
}

gameLoop();
