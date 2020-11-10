

var fixedRect;
var bullet,speed,weight;
function setup() {
  createCanvas(1200,800);
  
speed=random(55,90)
weight = random(400,500)
thickness = random(55,60)
 bullet = createSprite(200,500,50,50);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  fixedRect = createSprite(700,500,60,height/2);
  fixedRect.shapeColor = "white";
 
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if (fixedRect.x-bullet.x <(bullet.width+fixedRect.width/2)) {
   bullet.velocityX=0;
   var deformation=0.5 * weight * speed /22509; 
 if (deformation>180){

fixedRect.shapeColor= color(255,0,0)

 }
 
 if(deformation<180 && deformation>100){
fixedRect.shapeColor = color(230,230,0)

 }

 if(deformation<100){


  fixedRect.shapeColor=color(0,255,0)
 }
   drawSprites();

  }
}


function hasCollided(bullet,wall){

  bulletRightEdge = bullet.x+bullet.width;
  fixedRect = wall.x;
  if(bulletRightEdge>=fixedRectleftEdge){

    return true
  }
return false


if(hasCollided(bullet,wall)){
  bullet.velocity=0;
  var damage=0.5 * weight *speed* speed/(thickness * thickness *thickness);
  
  if(damage>10)
  {
  fixedRect.shapeColor=color(255,0,0)

  }


if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}



}
}
