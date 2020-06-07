const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  

  

  box1 = new Box(520,370,20,30);
  box2 = new Box(540,370,20,30);
  box3 = new Box(560,310,20,30);
  box4 = new Box(580,310,20,30);

  box5 = new Box(530,280,20,30);
  box6 = new Box(550,280,20,30);
  box7 = new Box(570,280,20,30);

  box8 = new Box(540,250,20,30);
  box9 = new Box(560,250,20,30);

  box10 = new Box(550,220,20,30);

  box11 = new Box(500,135,20,30);
  box12 = new Box(520,135,20,30);
  box13 = new Box(540,135,20,30);
  box14 = new Box(560,135,20,30);
  box15 = new Box(580,135,20,30);
  box16 = new Box(600,135,20,30);

  box17 = new Box(510,105,20,30);
  box18 = new Box(530,105,20,30);
  box19 = new Box(550,105,20,30);
  box20 = new Box(570,105,20,30);
  box21 = new Box(590,105,20,30);

  box22 = new Box(520,75,20,30);
  box23 = new Box(540,75,20,30);
  box24 = new Box(560,75,20,30);
  box25 = new Box(580,75,20,30);
  
  box26 = new Box(530,45,20,30);
  box27 = new Box(550,45,20,30);
  box28 = new Box(570,45,20,30);

  ball = new Ball(0,0,50);

  spring = new Projectile(ball.body,{x:90,y:203});

  ground = new Platform(400,390,800,20);

  groundHovering = new Platform(550,160,200,20);
  
}

function draw() {
  background(255);
  Engine.update(engine);  

  

 

  

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
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box26.display();
  box27.display();
  box28.display();

  ball.display();
  spring.display();
  ground.display();
  groundHovering.display();
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY+20});
}

function mouseReleased(){
  spring.potentialtokinetic();
}