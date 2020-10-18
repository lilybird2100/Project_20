var cRect, wRect, speed, weight, deformation; 

function setup() {
  createCanvas(1600,400);
  cR = createSprite(50, 200, 50, 50);
  cR.shapeColor = "blue"; 
  wR = createSprite(1300, 200, 60, 200); 
  wR.shapeColor = (rgb(80,80,80)); 
  speed = random(55,90); 
  weight = random(400,1500);
  cR.velocityX = speed; 
}

function draw() {
  background(0);  
  if(collison(cR, wR)){
    cR.velocityX = 0;
    cR.x = 1270; 
    deformation = (0.5 * weight * speed * speed)/22500 ; 
    if(deformation < 100){
      cR.shapeColor = "green"; 
    }
    if(deformation > 100 && deformation < 180){
      cR.shapeColor = "yellow"; 
    }
    if(deformation > 180){
      cR.shapeColor = "red"; 
    }
  }
  drawSprites();
}

function collison(object1, object2){
  //creating algorithm for isTouching() using the sprites mR and fr
  if (object1.x - object2.x <= object1.width/2 + object2.width/2
    && object2.x - object1.x <= object1.width/2 + object2.width/2
    && object1.y - object2.y <= object1.height/2 + object2.height/2 
    && object2.y - object1.y <= object1.height/2 + object2.height/2){
       
     return true;

   }
   else{

    return false;
    
   }
}