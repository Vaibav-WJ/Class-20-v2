var fixedRect,movingRect;





function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(800, 400, 50, 70);
  fixedRect.shapeColor="green";

  movingRect=createSprite(200,400,70,50);
  movingRect.shapeColor="green";
}

function draw() {
 background(0,0,0);  

 movingRect.x=mouseX;
 movingRect.y=mouseY;
 
 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
   movingRect.shapeColor="red";
   fixedRect.shapeColor="red";
 }else {
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
 }


  drawSprites();
}