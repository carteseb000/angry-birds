// $('body').css('background-color', 'black');
let canvas;
let world, engine;
let player, mConstraint;
let slingshot;
let box, ground;

function setup() {
    canvas = createCanvas(600, 400);
    engine = Matter.Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height-10, width, 20);
    box = new Box(450, 300, 50, 50);
    player = new Player(50, 300, 15);

    slingshot = new SlingShot(50, 300, player.body);

    const mouse = Matter.Mouse.create(canvas.elt);

    const options = {
        mouse: mouse,
        element: canvas.elt
    };

    mConstraint = Matter.MouseConstraint.create(engine, options);
    Matter.World.add(world, mConstraint);
}
function mouseReleased() {
    setTimeout(() => {
        slingshot.fly();
    }, 100);
}
let firstTick = true;
function draw() {
    if(firstTick == true) {
        firstTick = false;
        MyGamepadLib().startGamepad
    }
    
    background(0);
    Matter.Engine.update(engine);

    ground.show();
    player.show();
    slingshot.show();
    box.show();
}