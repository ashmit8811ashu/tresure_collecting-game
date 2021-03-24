var path,boy,cash,diamonds,jwellery,ruby;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,rubyImg;
var swordImg,swordG;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,rubyG;
var PLAY=1;
var END=0;
var gameState=1;
var gameOverImg,g1;


function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  rubyImg = loadImage("ruby.png");
  swordImg= loadImage("sword.png");
  gameOverImg=loadImage("gameOver.png")
  
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
// path.scale=1.2;


//creating boy running
boy = createSprite(160,330,20,20);
boy.addAnimation("JakeRunning",boyImg);
 boy.addAnimation("game2",gameOverImg) 
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
rubyG=new Group();
swordG=new Group();
}

function draw() {
  background(0);
  if(gameState===PLAY){
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse'
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createRuby();
createSword();
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(rubyG.isTouching(boy)) {
      rubyG.destroyEach();
      treasureCollection=treasureCollection - 50;
    }     
  }
 if(swordG.isTouching(boy)){
  swordG.destroyEach(); 
    boy.changeAnimation("game2",gameOverImg)
   boy.scale=0.5;
   boy.x=200;
   boy.y=200;
   gameState=END
   
 }
  }  
   if(gameState===END){
    // cashG.destroyEach();
   //  rubyG.destroyEach();
   //  diamondG.destroyEach();
    // jwelleryG.destroyEach();
     
    path.velocityY=0; 
   }
 
  if(treasureCollection%500 === 0){
    
  }

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+treasureCollection,150,30);
}



function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.15;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.05;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
jwellery.addImage(jwelleryImg);
  jwellery.scale=0.2;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createRuby(){
  if (World.frameCount % 150 == 0) {
  var ruby = createSprite(Math.round(random(50, 350),40, 10, 10));
ruby.addImage(rubyImg);
  ruby.scale=0.1;
  ruby.velocityY = 3;
  ruby.lifetime = 150;
  rubyG.add(ruby);
  }
}
function createSword(){
  if (World.frameCount % 200 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordG.add(sword);
  }
}


