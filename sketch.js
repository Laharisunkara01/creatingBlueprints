const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var lahariengine,lahariworld;
var box1,box2,ground;

function setup() {
  createCanvas(400,400);

  lahariengine=Engine.create();
  lahariworld=lahariengine.world;

  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100);
  ground=new Ground();

  
}

function draw() {
  background("black");  
  Engine.update(lahariengine);
  
  
  box1.display();
  box2.display();
  ground.display();
  
}