
var trex ,trex_running,ground,inv_ground,ground_image;
function preload(){
  trex_running=loadAnimation ("trex1.png","trex3.png","trex4.png");
ground_image=loadImage("ground2.png")
  

}

function setup(){
  createCanvas(1540,300);
  
  
  //create a trex sprite
trex = createSprite(50,200,20,20);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;
 ground = createSprite(20,281,3010,20);
 ground.addImage(ground_image);
 ground.velocityX=-4;
 inv_ground=createSprite(200,290,1540,10);
 inv_ground.visible=false;
}
function draw(){
  background("white");
  if (keyDown("up")&&trex.y>=100) {
    trex.velocityY=-10;
  }

  if(ground.x<0) {
    ground.x=ground.width/2;
  }

  trex.velocityY=trex.velocityY+0.5;
  trex.collide(inv_ground);
  
drawSprites();
}
