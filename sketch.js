
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 650, 800, 10);
	side1 = new Dustbin(600, 200, 200, 10);
	side2 = new Dustbin(510, 100, 10, 60);
	side3 = new Dustbin(690, 100, 10, 60);
	ball = new Paper(100, 200, 40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  side1.display();
  ground.display();
  side2.display();
  side3.display();
 ball.display();
  drawSprites();
 
}



