const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ball, ballImg, pin1, pin2, BgImg;
var BallBodyPosition;


function preload() {
  ballImg = loadImage("Images/Football.png");
  BgImg = loadImage("Images/Bg.png");
}
function setup() {
  createCanvas(1400, 750);

  ball = createSprite(700, 373, 50, 50);
  ball.addImage(ballImg);
  ball.debug=true;
  ball.scale = 0.1;

  engine = Engine.create();
  world = engine.world;

  player1 = new Player1(1130, 374);
  player2 = new Player1(975, 240);
  player3 = new Player1(975, 520);
  player4 = new Player1(800, 300);
  player5 = new Player1(800, 470);
  opp1 = new Player2(280, 374);
  opp2 = new Player2(280 + (1130 - 975), 240);
  opp3 = new Player2(280 + (1130 - 975), 520);
  opp4 = new Player2(280, 374);
  opp5 = new Player2(280, 374);
  //ball = new Ball(700, 373);
}

function draw() {
  background(BgImg);
  Engine.update(engine);

  player1.display();
  player2.display();
  player3.display();
  player4.display();
  player5.display();
  opp1.display();
  opp2.display();
  opp3.display();
  opp4.display();
  opp5.display();
  //ball.display();
  detectCollision(ball,player1);
  detectCollision(ball,player2);
  detectCollision(ball,player3);
  detectCollision(ball,player4);
  detectCollision(ball,player5);
  drawSprites();
  textSize(30); fill("white"); text(mouseX + "," + mouseY, 30, 30);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    var num = Math.round(random(1, 6));
    switch (num) {
      case 1: Matter.Body.setPosition(player1.body, { x: player1.body.position.x - 10, y: player1.body.position.y });
        break;
      case 2: Matter.Body.setPosition(player2.body, { x: player2.body.position.x - 10, y: player2.body.position.y });
        break;
      case 3: Matter.Body.setPosition(player3.body, { x: player3.body.position.x - 10, y: player3.body.position.y });
        break;
      case 4: Matter.Body.setPosition(player4.body, { x: player4.body.position.x - 10, y: player4.body.position.y });
        break;
      case 5: Matter.Body.setPosition(player5.body, { x: player5.body.position.x - 10, y: player5.body.position.y });
        break;
      default: break;
    }
  }
  else if (keyCode === RIGHT_ARROW) {
    var numb = Math.round(random(1, 6));
    switch (numb) {
      case 1: Matter.Body.setPosition(player1.body, { x: player1.body.position.x + 10, y: player1.body.position.y });
        break;
      case 2: Matter.Body.setPosition(player2.body, { x: player2.body.position.x + 10, y: player2.body.position.y });
        break;
      case 3: Matter.Body.setPosition(player3.body, { x: player3.body.position.x + 10, y: player3.body.position.y });
        break;
      case 4: Matter.Body.setPosition(player4.body, { x: player4.body.position.x + 10, y: player4.body.position.y });
        break;
      case 5: Matter.Body.setPosition(player5.body, { x: player5.body.position.x + 10, y: player5.body.position.y });
        break;
      default: break;
    }
  }
  else if (keyCode === UP_ARROW) {
    var numb = Math.round(random(1, 6));
    switch (numb) {
      case 1: Matter.Body.setPosition(player1.body, { x: player1.body.position.x, y: player1.body.position.y - 10 });
        break;
      case 2: Matter.Body.setPosition(player2.body, { x: player2.body.position.x, y: player2.body.position.y - 10 });
        break;
      case 3: Matter.Body.setPosition(player3.body, { x: player3.body.position.x, y: player3.body.position.y - 10 });
        break;
      case 4: Matter.Body.setPosition(player4.body, { x: player4.body.position.x, y: player4.body.position.y - 10 });
        break;
      case 5: Matter.Body.setPosition(player5.body, { x: player5.body.position.x, y: player5.body.position.y - 10 });
        break;
      default: break;
    }
  }
  else if (keyCode === DOWN_ARROW) {
    var numb = Math.round(random(1, 6));
    switch (numb) {
      case 1: Matter.Body.setPosition(player1.body, { x: player1.body.position.x, y: player1.body.position.y + 10 });
        break;
      case 2: Matter.Body.setPosition(player2.body, { x: player2.body.position.x, y: player2.body.position.y + 10 });
        break;
      case 3: Matter.Body.setPosition(player3.body, { x: player3.body.position.x, y: player3.body.position.y + 10 });
        break;
      case 4: Matter.Body.setPosition(player4.body, { x: player4.body.position.x, y: player4.body.position.y + 10 });
        break;
      case 5: Matter.Body.setPosition(player5.body, { x: player5.body.position.x, y: player5.body.position.y + 10 });
        break;
      default: break;
    }
  }
}
function detectCollision(Ball, player){
  playerBodyPosition = player.body.position 
  //BallBodyPosition.x = Ball.x
  //BallBodyPosition.y = Ball.y
  var distance=dist(Ball.x, Ball.y, playerBodyPosition.x, playerBodyPosition.y) 
  console.log(player.body.position.x);
  if (distance=430){
     //Matter.Body.setStatic(Ball.body,false) 
     Ball.x = Ball.x-1;
     //console.log(d); 
   }
  }
//https://github.com/Asmit-Bhattacharjee/Project28-Complete/blob/main/sketch.js