
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var ground,ball;



function setup() {
	createCanvas(1000, 500);



	engine = Engine.create();
	world = engine.world;

	ground = new Ground (500,480,1000,5);

	bin1 = new Bin (760,470,150,10);
	bin2 = new Bin (690,440,10,70);
	bin3 = new Bin (830,440,10,70); 

	ball = new Ball (100,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin1.display();
  bin2.display();
   bin3.display();
   ground.display();
 ball.display();
 


  drawSprites();
 
}
function keyPressed(){

	if(keyCode === UP_ARROW){

    	Matter.Body.applyForce(ball.body, ball.body.position, {x:65, y:-85});
	
	}

}


