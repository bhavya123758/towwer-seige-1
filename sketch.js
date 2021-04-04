const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var polygon1;
var ground,ground3,ground2;
var slingshot1;
var throws;
function preload(){
    polygon_img=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,20);
   ground2= new Ground(700,300,250,40);
   ground3= new Ground(525,600,250,40);
 
   
   throws=0;
    //log6 = new Log(230,180,80, PI/2);
    box1=new Boxes(625,250,50,60,"cyan")
    box2=new Boxes(675,250,50,60,"pink");
    box3=new Boxes(725,250,50,60,"orange");
    box4=new Boxes(775,250,50,60,"lime");
    box5=new Bag(650,190,50,60);
    box6=new Bag(700,190,50,60);
    box7=new Bag(750,190,50,60);
    box8=new Boxes(675,130,50,60);
    box9=new Boxes(725,130,50,60);
    box10=new Bag(700,70,50,60);
    box11=new Bag(450,550,50,60);
    box12=new Bag(500,550,50,60);
    box13=new Bag(550,550,50,60);
    box14=new Bag(600,550,50,60);
    box15=new Boxes(475,490,50,60);
    box16=new Boxes(525,490,50,60);
    box17=new Boxes(575,490,50,60);
    box18=new Bag(500,430,50,60);
    box19=new Bag(550,430,50,60);
    box20=new Boxes(525,370,50,60);
    polygon1=Bodies.circle(125,390,20);
    World.add(world,polygon1);
    slingshot1=new Rope(this.polygon1,{x:125,y: 400})
    Engine.update(engine);
}

function draw(){
    background("lime");
    Engine.update(engine);
    strokeWeight(4);

ground2.display();
ground.display();
ground3.display();
box1.display();
    //log6.display();
    box2.display();
    //log6.display();
    box3.display();
    //log6.display();
    box4.display();
    //log6.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    imageMode(CENTER)
    image(polygon_img ,polygon1.position.x,polygon1.position.y,100,100);
  
slingshot1.display();
textSize(20);
fill("red");
text("PRESS SPACE TO PLAY AGAIN",100,50);
text("NO.OF RELEASES: "+throws,100,100);
}


function mouseDragged(){
    Matter.Body.setPosition(this.polygon1, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot1.fly();
    throws=throws+1;
}
function keyPressed(){
	if(keyCode===32){
		
		Matter.Body.setPosition(polygon1.body,{x:125,y:400})
        
       
	}
}