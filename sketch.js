
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var bobObject1 = new Bob(300,400,50,50);
var bobObject2 = new Bob(350,400,50,50);
var bobObject3 = new Bob(400,400,50,50);
var bobObject4 = new Bob(450,400,50,50);
var bobObject5 = new Bob(500,400,50,50);


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
if (keyPressed(UPARROW)){
	bobObject1.velocityY=2;
}

  drawSprites();
 
}



