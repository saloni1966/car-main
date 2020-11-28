var wall,car,carI,weight,speed;
var rating,deformation;
function preload(){
  carI = loadImage("car.png");
}
function setup() {

  createCanvas(800,400);
  wall=createSprite(700, 200, 50, 400);
  car=createSprite(100, 200, 50, 50);
  //make a variable speed because in deformation we have to write speed too
  speed = Math.round(random(55,90));
  car.addImage("car.png",carI)
  car.debug=true;
  wall.debug=true;
  car.velocityX = speed;
  weight=Math.round(random(400,1500));

}
function draw() {
  background("lightblue");  
 
  
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.setVelocity(0,0);
    deformation=(0.5*weight*speed*speed)/22500;
    if(deformation>180){
      wall.shapeColor = "red";
   //rating="F-";
    }
    if(deformation>90 && deformation<180){
      wall.shapeColor= "yellow";
    //  rating="B+";
       }
       
       if(deformation<90){
       wall.shapeColor="green";
      //  rating="A++"
         }
  }
  drawSprites();
}