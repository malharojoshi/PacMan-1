var pacMan;
var pacAnima;

var cardboards = [];
var edges;
function preload() {
  pacManAnima = loadAnimation("images/pacMan-1.png", "images/pacMan-2.png");
}
function setup() {
  pacMan = createSprite(20, 25, 18, 18);
  pacMan.addAnimation("pacManRunning", pacManAnima);
  cardboards = [
    createSprite(50, 50, 10, 100),
    createSprite(150, 100, 100, 10),
    createSprite(150, 75, 10, 50),
    createSprite(125, 50, 50, 10),
    createSprite(200, 25, 10, 50),
    createSprite(50, 150, 100, 10),
    createSprite(150, 150, 10, 100),
    createSprite(50, 200, 100, 10),
    createSprite(300, 50, 100, 10),
    createSprite(250, 100, 10, 100),
    createSprite(380, 325, 160, 10),
    createSprite(300, 275, 10, 100),
    createSprite(325, 225, 50, 10),
    createSprite(250, 250, 10, 100),
    createSprite(200, 200, 100, 10),
    createSprite(100, 300, 200, 10),
    createSprite(300, 150, 100, 10),
    createSprite(350, 125, 10, 50),
    createSprite(200, 350, 100, 10),
    createSprite(50, 375, 10, 50),
    createSprite(100, 250, 100, 10),
    createSprite(50, 275, 10, 50),
  ];
  edges = createEdgeSprites();
}

function draw() {
  background("green");

  pacMan.velocityX = 0;
  pacMan.velocityY = 0;

  pacMan.bounceOff(edges);

  for (var i = 0; i < 22; i++) {
    pacMan.bounceOff(cardboards[i]);
  }

  if (keyDown("up")) {
    pacMan.velocityX = 0;
    pacMan.velocityY = -2;
  }
  if (keyDown("down")) {
    pacMan.velocityX = 0;
    pacMan.velocityY = 2;
  }

  if (keyDown("right")) {
    pacMan.velocityX = 2;
    pacMan.velocityY = 0;
  }

  if (keyDown("left")) {
    pacMan.velocityX = -2;
    pacMan.velocityY = 0;
  }

  pacMan.shapeColor = "orange";
  drawSprites();
}
