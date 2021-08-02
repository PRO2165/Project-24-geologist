const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

var stone1,rubber1,iron1



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

  stone1  = new Stone(700,320,40,40)
  rubber1  = new Rubber(800,320,50)
  iron1  = new Iron(900,320,70,100)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone1.display();
    rubber1.display();
    iron1.display();
    plane.display();
    hammer.display();

    
 
}