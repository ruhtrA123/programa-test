var bloc

function setup() {
  createCanvas(800,800);
  bloc = createSprite(400,400,400,100)
}

function draw() 
{
  background(30);
if (keyDown("w")) {
  
bloc.y = bloc.y-10
}
if (keyDown("s")) {
  
  bloc.y = bloc.y+10
  }
  if (keyDown("a")) {
  
    bloc.x = bloc.x-10
    }
    if (keyDown("d")) {
  
      bloc.x = bloc.x+10
      }
            

  drawSprites();

}




