const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function preload(){
    bgImage = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/5);
    log5 = new Log(870,120,150, -PI/4);

    bird = new Bird(100,100);
    log_cons = new Log(200,100,150,PI/2)

    var opt = {
        bodyA : bird.body,
        bodyB : log_cons.body,
        pointB : {x:0,y:0},
        stiffness : 0.3,
        length : 40
    }

    var link = Matter.Constraint.create(opt);
    World.add(world,link)

}

function draw(){
    background(bgImage);
    //imageMode(CENTER)
    //image(bgImage,0,0,width,height)
    //resize(bgImage,300,400)
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    log_cons.display()

    line(bird.body.position.x,bird.body.position.y,log_cons.body.position.x,log_cons.body.position.y)
}