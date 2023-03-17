var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200)

}

function draw() 
{
  background(30);
if(keyDown("left")){
  box.x-=10
  box.shapeColor="red"
}
if(keyDown("right")){
  box.x+=10
  box.shapeColor="green"
}
if(keyDown("up")){
  box.y-=10
  box.shapeColor="blue"
}
if(keyDown("down")){
  box.y+=10
  box.shapeColor="yellow"
}
drawSprites()
}




