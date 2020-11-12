
const Engine = Matter.Engine;
const Composites = Matter.Composites;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash1;
var ground1;
var bin1;
var num=1;
var score =0;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;
	
	trash1 = new Trash(100, 200);
	ground1 = new Ground(400, 518, 800, 50);
	ground2 = new Ground(0, 270, 50, 550);
	ground3 = new Ground(800, 270, 50,550);
	ground4 = new Ground(400, 0, 800,50);
	bin1 = new Bin(500, 440, 15, 105);
	bin2 = new Bin(540, 485, 80, 15);
	bin3 = new Bin(580, 440, 15, 105);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(225);
	text("Put the ball in the bucket", 100,100);
	text("Take advantage of glitches", 100,120);
	text("Use up arrow to jump the ball", 600,450);
	text("Score: "+score, 700, 100);
	newtrash();
	trash1.show();
	ground1.show();
	ground2.show();
	ground3.show();
	ground4.show();
	bin2.show();
	bin1.show();
	bin3.show();
	
}

function keyPressed() {
	if (keyCode === UP_ARROW&&num===1) {
		num=0;
		resetnum();
		Matter.Body.setVelocity(trash1.body, { x: 15, y: 20 });		
	}
}

function resetnum(){
	setInterval(reset,2000);
}

function reset(){
	num=1;
}

function newtrash(){
	if(trash1.body.position.x>507&&trash1.body.position.x<550&&trash1.body.position.y>411&&trash1.body.position.y<478){
		trash1 =new Trash(100,200);
		trash1.show();
		text("Well Done", 100,100);
		score=score+1;
	}
}