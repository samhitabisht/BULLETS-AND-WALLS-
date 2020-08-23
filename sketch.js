var bullet;
var wall;
var speed, weight, thickness; 

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 20);
  wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);
  bullet.velocityX= speed;

  function hasCollided (bullet,wall) {
    bulletRightEdge= bullet.x + bullet.width;
    wallLeftEdge= wall.x; 
    if (bulletRightEdge>=wallLeftEdge) {
      return true
    }
    return false; 
  }

  if (hasCollided(bullet,wall)){
    var damage= 0.5 * weight * speed * speed / thickness  * thickness  * thickness  ;
    bullet.velocityX= 0;

    if (damage > 10){
      wall.shapeColor=color(255,0,0);
    }
    
    if (damage < 10 ){
      wall.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();

  

}