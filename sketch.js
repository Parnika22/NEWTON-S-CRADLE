
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(width/2,150,350,40);

	bobObject1 = new Bob(580,600,30);
	rope1 = new Rope(bobObject1.body, roof.body, 580, 150 );

	bobObject2 = new Bob(640,600,30);
	rope2 = new Rope(bobObject2.body, roof.body, 640, 150);

	bobObject3 = new Bob(width/2,600,30);
	rope3 = new Rope(bobObject3.body, roof.body, width/2, 150);

	bobObject4 = new Bob(760,600,30);
	rope4 = new Rope(bobObject4.body, roof.body, 760, 150);

	bobObject5 = new Bob(820,600,30);
	rope5 = new Rope(bobObject5.body, roof.body, 820, 150);

	bobObject1.body.velocity.x = 15


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bobObject1.display();
  rope1.display();

  bobObject2.display();
  rope2.display();

  bobObject3.display();
  rope3.display();

  bobObject4.display();
  rope4.display();

  bobObject5.display();
  rope5.display();


  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x: -100, y: 100})
	}
}



