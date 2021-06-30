const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground,rock,wall,wedge;
var angle = 60;

function setup(){
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution:1,
    frictionAir:0.001
  
  }

  ball = Bodies.circle(100,20,10,ball_options);
  World.add(world,ball);

  var options={
    isStatic:true
  }

  ground = Bodies.rectangle(200,380,400,10,options);
  World.add(world,ground);

  var rock_options={
    restitution:0.8,
    frictionAir:0.002
  }

  rock = Bodies.circle(300,20,30,rock_options)
  World.add(world,rock)


  wall = Bodies.rectangle(300,200,200,20,options)
  World.add(world,wall)


  wedge = Bodies.rectangle(100,200,100,20,options)
  World.add(world,wedge)

  

}

function draw(){
  background("black");
  Engine.update(engine);

  ellipseMode(RADIUS);
  rectMode(CENTER);

  //push();
  fill("orange")
  ellipse(ball.position.x,ball.position.y,20);
   rect(ground.position.x,ground.position.y,400,10);
   //pop();
   ellipse(rock.position.x,rock.position.y,30);
   rect(wall.position.x,wall.position.y,200,20);
   

   //rect(wedge.position.x,wedge.position.y,100,20);
   Matter.Body.rotate(wedge,angle)
   push();
   translate(wedge.position.x,wedge.position.y)
   rotate(angle);
   rect(0,0,100,20)
   
   angle = angle+0.1;
}