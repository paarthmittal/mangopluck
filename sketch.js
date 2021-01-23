
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
 
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new stone(215,450,50,50);
	sling1=new slingshot(stoneObj.body,{x:175,y:400})
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine)
  //Add code for displaying text here!
  image(boy,180,375,200,300)
  
  treeObj.display();
  mango1.display();
  groundObject.display();
  stoneObj.display();
  detectcollision(stoneObj,mango1)
  if((mango1.body.position.x===stoneObj.body.position.x)&&mango1.body.position.y==stoneObj.body.position.y){
	  Matter.Body.setStatic(mango1,false)
  }


}
function mouseDragged(){
	
		
		Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
	function mouseReleased(){
	sling1.fly()
	
	}

	function detectcollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position;
	stoneBodyPosition=Lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=Lmango.r+Lstone.r){
	Matter.Body.setStatic(Lmango.body,false)
}	
}
