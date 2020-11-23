var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)


  thickness=random(22,83)




  
    bullet=createSprite(50, 200, 10,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color("yellow");

 
  	
    
    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color(230,230,230);
  
}


function draw() {
  background(0);  

  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }


  drawSprites();
 
}


function hasCollided(kbullet, kwall)
{
	bulletRightEdge=kbullet.x +kbullet.width;
	wallLeftEdge=kwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}



/*var bullet,speed,weight
var wall,thickness

function setup() {
  createCanvas(1200,400);
  thickness=random(22,83)
  bullet=createSprite(50,200,10,5)
  bullet.shapeColor="purple"
  wall=createSprite(1000,200,thickness,height/2) 
  speed=random(223,321)
  
  weight=random(30,52)
  console.log(speed)

}

function draw() {
  background("yellow"); 
 
  bullet.velocityX=speed
  console.log(speed) 
 if(hascollided(wall,bullet))
 {
bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage>10){
wall.shapeColor=color(255,0,0)
}
if(damage<10){
wall.shapeColor=color(0,255,0)
}

 }
 
drawSprites();
}


function hascollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
return true


  }
  
return false
  

}
*/