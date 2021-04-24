var ball, ballImg, pin1, pin2, BgImg, playerImg, oppImg;
var BallBodyPosition;
var score1 = 0;
var score2 = 0;

var gameState = 1;
function preload() {
  ballImg = loadImage("Images/Football.png");
  BgImg = loadImage("Images/Bg.png");
  playerImg = loadImage("Images/Logo 1.png");
  oppImg = loadImage("Images/Logo 2 (1).png")
}
function setup() {
  createCanvas(1400, 750);

  ball = createSprite(700, 373, 50, 50);
  ball.addImage(ballImg);
  ball.scale = 0.1;
  player1 = createSprite(1130, 374, 50, 50);
  player1.addImage(playerImg);
  player1.scale = 0.4;
  player1.setCollider("rectangle", 0, 0, 150, 150);
  player2 = createSprite(975, 240, 50, 50);
  player2.addImage(playerImg);
  player2.scale = 0.4;
  player2.setCollider("rectangle", 0, 0, 150, 150);
  player3 = createSprite(975, 520, 50, 50);
  player3.addImage(playerImg);
  player3.scale = 0.4;
  player3.setCollider("rectangle", 0, 0, 150, 150);
  player4 = createSprite(800, 300, 50, 50);
  player4.addImage(playerImg);
  player4.scale = 0.4;
  player4.setCollider("rectangle", 0, 0, 150, 150);
  player5 = createSprite(800, 470, 50, 50);
  player5.addImage(playerImg);
  player5.scale = 0.4;
  player5.setCollider("rectangle", 0, 0, 150, 150);
  edge1 = createSprite(700, 25, 1215, 20);
  edge1.visible = false;
  edge2 = createSprite(700, 725, 1215, 20);
  edge2.visible = false;
  edge3 = createSprite(85, 160, 20, 260);
  edge3.visible = false;
  edge4 = createSprite(85, 587.5, 20, 260);
  edge4.visible = false;
  edge5 = createSprite(1315, 160, 20, 260);
  edge5.visible = false;
  edge6 = createSprite(1315, 587.5, 20, 260);
  edge6.visible = false;
  goal1 = createSprite(80, 375, 30, 170);
  goal1.visible = false;
  goal2 = createSprite(1320, 375, 30, 170);
  goal2.visible = false;

  opp1 = createSprite(280, 374, 50, 50);
  opp1.addImage(oppImg);
  opp1.scale = 0.15;
  opp1.setCollider("rectangle", 0, 0, 550, 300);
  opp2 = createSprite(280 + (1130 - 975), 240, 50, 50);
  opp2.addImage(oppImg);
  opp2.scale = 0.15;
  opp2.setCollider("rectangle", 0, 0, 550, 300);
  opp3 = createSprite(280 + (1130 - 975), 520, 50, 50);
  opp3.addImage(oppImg);
  opp3.scale = 0.15;
  opp3.setCollider("rectangle", 0, 0, 550, 300);
  opp4 = createSprite(600, 300, 50, 50);
  opp4.addImage(oppImg);
  opp4.scale = 0.15;
  opp4.setCollider("rectangle", 0, 0, 550, 300);
  opp5 = createSprite(600, 470, 50, 50);
  opp5.addImage(oppImg);
  opp5.scale = 0.15;
  opp5.setCollider("rectangle", 0, 0, 550, 300);
}

function draw() {
  background(BgImg);
  ball.bounceOff(player1);
  ball.bounceOff(player2);
  ball.bounceOff(player3);
  ball.bounceOff(player4);
  ball.bounceOff(player5);
  ball.bounceOff(opp1);
  ball.bounceOff(opp2);
  ball.bounceOff(opp3);
  ball.bounceOff(opp4);
  ball.bounceOff(opp5);
  ball.bounceOff(edge1);
  ball.bounceOff(edge2);
  ball.bounceOff(edge3);
  ball.bounceOff(edge4);
  ball.bounceOff(edge5);
  ball.bounceOff(edge6);
  player1.bounceOff(player2);
  player1.bounceOff(player3);
  player1.bounceOff(player4);
  player1.bounceOff(opp1);
  player1.bounceOff(opp2);
  player1.bounceOff(opp3);
  player1.bounceOff(opp4);
  player1.bounceOff(opp5);
  player1.bounceOff(edge1);
  player1.bounceOff(edge2);
  player1.bounceOff(edge3);
  player1.bounceOff(edge4);
  player1.bounceOff(edge5);
  player1.bounceOff(edge6);
  player1.bounceOff(goal1);
  player1.bounceOff(goal2);
  player2.bounceOff(player3);
  player2.bounceOff(player4);
  player2.bounceOff(opp1);
  player2.bounceOff(opp2);
  player2.bounceOff(opp3);
  player2.bounceOff(opp4);
  player2.bounceOff(opp5);
  player2.bounceOff(edge1);
  player2.bounceOff(edge2);
  player2.bounceOff(edge3);
  player2.bounceOff(edge4);
  player2.bounceOff(edge5);
  player2.bounceOff(edge6);
  player2.bounceOff(goal1);
  player2.bounceOff(goal2);
  player3.bounceOff(player4);
  player3.bounceOff(opp1);
  player3.bounceOff(opp2);
  player3.bounceOff(opp3);
  player3.bounceOff(opp4);
  player3.bounceOff(opp5);
  player3.bounceOff(edge1);
  player3.bounceOff(edge2);
  player3.bounceOff(edge3);
  player3.bounceOff(edge4);
  player3.bounceOff(edge5);
  player3.bounceOff(edge6);
  player3.bounceOff(goal1);
  player3.bounceOff(goal2);
  player4.bounceOff(player5);
  player4.bounceOff(opp1);
  player4.bounceOff(opp2);
  player4.bounceOff(opp3);
  player4.bounceOff(opp4);
  player4.bounceOff(opp5);
  player4.bounceOff(edge1);
  player4.bounceOff(edge2);
  player4.bounceOff(edge3);
  player4.bounceOff(edge4);
  player4.bounceOff(edge5);
  player4.bounceOff(edge6);
  player4.bounceOff(goal1);
  player4.bounceOff(goal2);
  player5.bounceOff(opp1);
  player5.bounceOff(opp2);
  player5.bounceOff(opp3);
  player5.bounceOff(opp4);
  player5.bounceOff(opp5);
  player5.bounceOff(edge1);
  player5.bounceOff(edge2);
  player5.bounceOff(edge3);
  player5.bounceOff(edge4);
  player5.bounceOff(edge5);
  player5.bounceOff(edge6);
  player5.bounceOff(goal1);
  player5.bounceOff(goal2);
  opp1.bounceOff(opp2);
  opp1.bounceOff(opp3);
  opp1.bounceOff(opp4);
  opp1.bounceOff(opp5);
  opp1.bounceOff(edge1);
  opp1.bounceOff(edge2);
  opp1.bounceOff(edge3);
  opp1.bounceOff(edge4);
  opp1.bounceOff(edge5);
  opp1.bounceOff(edge6);
  opp1.bounceOff(goal1);
  opp1.bounceOff(goal2);
  opp2.bounceOff(opp3);
  opp2.bounceOff(opp4);
  opp2.bounceOff(opp5);
  opp2.bounceOff(edge1);
  opp2.bounceOff(edge2);
  opp2.bounceOff(edge3);
  opp2.bounceOff(edge4);
  opp2.bounceOff(edge5);
  opp2.bounceOff(edge6);
  opp2.bounceOff(goal1);
  opp2.bounceOff(goal2);
  opp3.bounceOff(opp4);
  opp3.bounceOff(opp5);
  opp3.bounceOff(edge1);
  opp3.bounceOff(edge2);
  opp3.bounceOff(edge3);
  opp3.bounceOff(edge4);
  opp3.bounceOff(edge5);
  opp3.bounceOff(edge6);
  opp3.bounceOff(goal1);
  opp3.bounceOff(goal2);
  opp4.bounceOff(opp5);
  opp4.bounceOff(edge1);
  opp4.bounceOff(edge2);
  opp4.bounceOff(edge3);
  opp4.bounceOff(edge4);
  opp4.bounceOff(edge5);
  opp4.bounceOff(edge6);
  opp4.bounceOff(goal1);
  opp4.bounceOff(goal2);
  opp5.bounceOff(edge1);
  opp5.bounceOff(edge2);
  opp5.bounceOff(edge3);
  opp5.bounceOff(edge4);
  opp5.bounceOff(edge5);
  opp5.bounceOff(edge6);
  opp5.bounceOff(goal1);
  opp5.bounceOff(goal2);
  if (ball.isTouching(goal1)) {
    score1 = score1 + 1;
    gameState = 2;
  }
  else if (ball.isTouching(goal2)) {
    score2 = score2 + 1;
    gameState = 2;
  }
  if (gameState === 2) {
    reset();
  }
  drawSprites();
  textSize(30); 
  //fill("white"); text(mouseX + "," + mouseY, 30, 30);
  fill("yellow");
  text("PLAYER1 = " + score1, 480, 80);
  fill("red");
  text(score2 + " = PLAYER2", 736, 80);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    var num = Math.round(random(1, 6));
    switch (num) {
      case 1: player1.x = player1.x - 50;
        break;
      case 2: player2.x = player2.x - 50;
        break;
      case 3: player3.x = player3.x - 50;
        break;
      case 4: player4.x = player4.x - 50;
        break;
      case 5: player5.x = player5.x - 50;
        break;
      default: break;
    }
  }
  else if (keyCode === RIGHT_ARROW) {
    console.log("hi");
    var num = Math.round(random(1, 6));
    switch (num) {
      case 1: player1.x = player1.x + 10;
        break;
      case 2: player2.x = player2.x + 10;
        break;
      case 3: player3.x = player3.x + 10;
        break;
      case 4: player4.x = player4.x + 10;
        break;
      case 5: player5.x = player5.x + 10;
        break;
      default: break;
    }
  }
  else if (keyCode === UP_ARROW) {
    var num = Math.round(random(1, 6));
    switch (num) {
      case 1: player1.y = player1.y - 10;
        break;
      case 2: player2.y = player2.y - 10;
        break;
      case 3: player3.y = player3.y - 10;
        break;
      case 4: player4.y = player4.y - 10;
        break;
      case 5: player5.y = player5.y - 10;
        break;
      default: break;
    }
  } else if (keyCode === DOWN_ARROW) {
    var num = Math.round(random(1, 6));
    switch (num) {
      case 1: player1.y = player1.y + 10;
        break;
      case 2: player2.y = player2.y + 10;
        break;
      case 3: player3.y = player3.y + 10;
        break;
      case 4: player4.y = player4.y + 10;
        break;
      case 5: player5.y = player5.y + 10;
        break;
      default: break;
    }
  }
  if (keyCode === 68) {
    var num = Math.round(random(1, 6));
    switch (num) {
      case 1: opp1.x = opp1.x + 10;
        break;
      case 2: opp2.x = opp2.x + 10;
        break;
      case 3: opp3.x = opp3.x + 10;
        break;
      case 4: opp4.x = opp4.x + 10;
        break;
      case 5: opp5.x = opp5.x + 10;
        break;
      default: break;
    }
  }
  else if (keyCode === 65) {
    //console.log("hi");
    var num = Math.round(random(1, 6));
    switch (num) {
      case 1: opp1.x = opp1.x - 10;
        break;
      case 2: opp2.x = opp2.x - 10;
        break;
      case 3: opp3.x = opp3.x - 10;
        break;
      case 4: opp4.x = opp4.x - 10;
        break;
      case 5: opp5.x = opp5.x - 10;
        break;
      default: break;
    }
  }
  else if (keyCode === 87) {
    var num = Math.round(random(1, 6));
    switch (num) {
      case 1: opp1.y = opp1.y - 10;
        break;
      case 2: opp2.y = opp2.y - 10;
        break;
      case 3: opp3.y = opp3.y - 10;
        break;
      case 4: opp4.y = opp4.y - 10;
        break;
      case 5: opp5.y = opp5.y - 10;
        break;
      default: break;
    }
  } else if (keyCode === 83) {
    var num = Math.round(random(1, 6));
    switch (num) {
      case 1: opp1.y = opp1.y + 10;
        break;
      case 2: opp2.y = opp2.y + 10;
        break;
      case 3: opp3.y = opp3.y + 10;
        break;
      case 4: opp4.y = opp4.y + 10;
        break;
      case 5: opp5.y = opp5.y + 10;
        break;
      default: break;
    }
  }
}
function reset() {
  gameState = 1;
  ball.x = 700;
  ball.y = 373;
  player1.x = 1130;
  player1.y = 374;
  player2.x = 975;
  player2.y = 240;
  player3.x = 975;
  player3.y = 520;
  player4.x = 800;
  player4.y = 300;
  player5.x = 800;
  player5.y = 470;
  opp1.x = 280;
  opp1.y = 374;
  opp2.x = 280 + (1130 - 975);
  opp2.y = 240;
  opp3.x = 280 + (1130 - 975);
  opp3.y = 520;
  opp4.x = 600;
  opp4.y = 300;
  opp5.x = 600;
  opp5.y = 470;
}