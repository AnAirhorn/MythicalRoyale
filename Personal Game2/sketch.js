var player1, player2, ground;
var player1Health, Player2Health;
var dragonrightImg, centaurrightImg;
var centaurleftImg, dragonleftImg;
var centaurAttackGIF, openingImg;
var backgroundImg;
var heart1, heart2, heart3;
var gamestate = 0;

function preload(){
  dragonrightImg = loadImage("dragon-right.png");
  centaurrightImg = loadImage("Centaur-right.png");
  dragonleftImg = loadImage("dragon-left.png");
  centaurleftImg = loadImage("centaur-left.png");
  backgroundImg = loadImage("backgroundImg.png");
  heart1 = loadImage("heart1.png");
  heart2 = loadImage("heart2.png");
  heart3 = loadImage("heart3.png");
  centaurAttackGIF = loadAnimation("centuarAttack.gif")
  openingImg = loadImage("MythicalRoyale.png")
}
function setup(){
  canvas = createCanvas(1400, 600);
 
  //players
  player1 = createSprite(200, 500, 50, 150);
  player1.shapeColor = "blue";
  player1.addImage(dragonrightImg);
  player1.scale = 1.5
  player1Health = 3;

  player2 = createSprite(1200, 500, 200, 150);
  player2.shapeColor = "green";
  player2.addImage(centaurleftImg);
  player2.scale = 1.2
  player2Health = 3;

  open = createSprite(700, 300);
  open.addImage(openingImg);
  open.scale = 2

  //ground
  ground = createSprite(700, 575, 1400, 50);
  ground.shapeColor = "crimson";
}

function draw(){
  background(backgroundImg);
  if(gamestate == 0){
    player1.visible = false
    player2.visible = false
    ground.visible = false
    if(keyDown("space")){
      gamestate= 1
    }
  }
  if(gamestate == 1){
    open.visible = false;
    player1.visible = true;
    player2.visible = true;
    ground.visible = true;
    //player controls
    //player1
    player1.collide(ground);
    player1.velocityY = player1.velocityY + 0.8;
    if(keyDown("a")){
      player1.x = player1.x-10;
      player1.addImage(dragonleftImg);
    }
    if(keyDown("d")){
      player1.x = player1.x+10
      player1.addImage(dragonrightImg)
    }
    if(player1.y >= 475){
      if(keyDown("w")){
        player1.velocityY = -15
    }}
  
    //player2
    player2.collide(ground)
    player2.velocityY = player2.velocityY + 0.8
    if(keyDown("left")){
      player2.x = player2.x-10
      player2.addImage(centaurleftImg)
      player2.scale = 1.2
    }
    if(keyDown("right")){
      player2.x = player2.x+10
      player2.addImage(centaurrightImg)
      player2.scale = 0.12
    }
    if(player2.y >= 470){
      if(keyDown("up")){
        player2.velocityY = -15
    }}
    //damage
    if(player1.isTouching(player2)){
      if(keyDown("x")){
        player1.shapeColor = "yellow"
        player2Health = player2Health-1
      }
    }
    if(player2.isTouching(player1)){
      if(keyDown("m")){
        player2.shapeColor = "white"
        player1Health = player1Health-1
        player2.addAnimation(centaurAttackGIF);
      }
    }
    

    //health
    if(player1Health == 3){
      P1H3 = createSprite(70, 60, 50, 50);
      P1H3.addImage(heart3);
      P1H3.scale = 3
      //P1H3.visible = true;
    }
    if(player1Health == 2){
      P1H2 = createSprite(120, 60, 50, 50)
      P1H2.addImage(heart2)
      P1H2.scale = 3
    }
    if(player1Health == 1){
      P1H1 = createSprite(170, 60, 50, 50)
      P1H1.addImage(heart1)
      P1H1.scale = 3
      //P1H1.visible = true
    }
    if(player1Health == 0){
      gamestate = 2
      textSize(25)
      text("The Centaur Wins!", 700, 300)
    }
    
    if(player2Health == 3){
      P2H3 = createSprite(1330, 60, 50, 50);
      P2H3.addImage(heart3);
      P2H3.scale = 3;
    }
    if(player2Health == 2){
      //P2H3.visible = false;
      P2H2 = createSprite(1280, 60, 50, 50);
      P2H2.addImage(heart2)
      P2H2.scale = 3
    }
    if(player2Health == 1){
    // P2H2.visible = false;
      //P2H3.visible = false;
      P2H1 = createSprite(1230, 60, 50, 50);
      P2H1.addImage(heart1);
      P2H1.scale = 3
    }
    if(player2Health == 0){
      gamestate = 2
      textSize(25)
      text("The Dragon Wins!", 700, 300)
    }
  }
  if(gamestate == 2){
    open.visible = false
    player1.visible = false
    player2.visible = false
    ground.visible = false

    if(player1Health == 0){
      gamestate = 2
      textSize(25)
      text("The Centaur Wins!", 700, 300)
    }
    if(player2Health == 0){
      gamestate = 2
      textSize(25)
      text("The Dragon Wins!", 700, 300)
    }
    
  }

  

  drawSprites();
}