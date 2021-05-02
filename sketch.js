const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;

var base1;
var base2;

var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;

var box8;
var box9;
var box10;
var box11;
var box12;

var box13;
var box14;
var box15;

var box16;

var bx1;
var bx2;
var bx3;
var bx4;
var bx5;

var bx6;
var bx7;
var bx8;

var bx9;

var ground;

var polygon;

var slingshot;

var polygon_img;

function preload() {
    polygon_img = loadImage("Sprites/polygon.png");
}

function setup() {
    createCanvas(1200, 600);

   engine = Engine.create();
   world = engine.world;

    base1 = new Base(500, 400, 220, 10);
    base2 = new Base(900, 300, 155, 10);
    ground = new Base(590, 600, 1200, 20);

    box1 = new Box(405, 380);
    box2 = new Box(435, 380);
    box3 = new Box(465, 380);
    box4 = new Box(495, 380);
    box5 = new Box(525, 380);
    box6 = new Box(555, 380);
    box7 = new Box(585, 380);

    box8 = new Box(435, 340);
    box9 = new Box(465, 340);
    box10 = new Box(495, 340);
    box11 = new Box(525, 340);
    box12 = new Box(555, 340);

    box13 = new Box(465, 300);
    box14 = new Box(495, 300);
    box15 = new Box(525, 300);

    box16 = new Box(495, 260);

    bx1 = new Bx(835, 260);
    bx2 = new Bx(865, 260);
    bx3 = new Bx(895, 260);
    bx4 = new Bx(925, 260);
    bx5 = new Bx(955, 260);

    bx6 = new Bx(865, 225);
    bx7 = new Bx(895, 225);
    bx8 = new Bx(925, 225);

    bx9 = new Bx(895, 190);

    //creation of slingshot
    
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot = new Chain(this.polygon, {x:220, y: 300});

    Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    background("brown");     
    textSize(25);
    fill("white");
    stroke("black");
    text("Drag The Hexagonal Stone and Release, To Launch It Towards The Blocks", 100, 100);
    text("Press Space to get a second chance to play", 150, 150)

    base1.display();
    base2.display();

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

    bx1.display();
    bx2.display();
    bx3.display();
    bx4.display();
    bx5.display();

    bx6.display();
    bx7.display();
    bx8.display();

    bx9.display();

    ground.display();


    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40)

    slingshot.display();

    drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x:mouseX, y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(this.polygon);
        polygon.x = 50;
        polygon.y = 200;
    }
}