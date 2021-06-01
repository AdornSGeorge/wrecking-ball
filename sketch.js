const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ground;
var box1,box2,box3,box4,bow5,box6,box7,box8,box9,box10;
var ball,rope;


function setup(){
    createCanvas(1500,600);
    engine=Engine.create();
    world=engine.world;
    
    ground = new Ground(600,600,1200,20);
    box1 = new Box(900,100,50,50);
    box2 = new Box(900,100,50,50);
    box3 = new Box(900,100,50,50);
    box4 = new Box(900,100,50,50);
    box5 = new Box(900,100,50,50);
    box6 = new Box(800,100,50,50);
    box7 = new Box(800,100,50,50);
    box8 = new Box(800,100,50,50);
    box9 = new Box(800,100,50,50);
    box10 = new Box(800,100,50,50);
    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body,{ x:500,y:50});
     

    


}
 
function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
       
   
}








