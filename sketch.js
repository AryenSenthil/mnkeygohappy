var backImage,backgr;
var player, player_running;
var ground,ground_img;

var END =0;
var PLAY =1;
var gameState = PLAY;
var stone, banana, stoneImage, bananaImage;
var bananaGroup, stoneGroup;
var gameover,gameoverImage;
var score = 0;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
  gameoverImage = loadImage("gameOver.png")

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
  gameover=createSprite(400,200,400,400);
  gameover.addImage(gameoverImage);
  gameover.scale=1.5;

  bananaGroup = new Group(); 
  stoneGroup = new Group(); 
}
function draw() { 
  background(0);
  


  if(gameState===PLAY){
     
    gameover.visible = false;

  
    

  if(backgr.x<100){
    backgr.x=backgr.width/2;
    
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
   
    if (bananaGroup.isTouching(player)){
      score = score + 1;
      player.scale = player.scale+ 0.01
    }

    if(stoneGroup. isTouching(player)) {
      gameover.visible=true;
    }
  }






  spawnBanana();
  spawnObstacle();
  drawSprites();
 
  fill("white");
    textSize(30);
    text("score"+ score, 500,100);
}


function spawnBanana(){
  if(frameCount% 100===0){
  banana = createSprite(800,100,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.05;
  banana.velocityX = -4;
  banana.lifetime = 500;
  bananaGroup.add(banana);

  }
}

function spawnObstacle(){
  if(frameCount% 250===0){
  stone = createSprite(900,340,20,20);
  stone.addImage(stoneImage);
  stone.scale=0.30;
  stone.velocityX = -4;
  stone.lifetime = 500;
  stoneGroup.add(stone);


  }
}

