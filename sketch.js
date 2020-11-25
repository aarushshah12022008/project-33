var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var gamestate = "play";

var particle;
var turn = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(20);
  fill("yellow");
  text("Score : "+score,40,30);

  textSize(20);
  fill("yellow");
  text("Turn : "+turn,700,30);

  textSize(20);
  text("50",30,520);
  textSize(20);
  text("40",110,520);
  textSize(20);
  text("30",190,520);
  textSize(20);
  text("20",270,520);
  textSize(20);
  text("10",350,520);
  textSize(20);
  text("10",430,520);
  textSize(20);
  text("20",510,520);
  textSize(20);
  text("30",590,520);
  textSize(20);
  text("40",670,520);
  textSize(20);
  text("50",750,520);

  Engine.update(engine);
 



  if(particle != null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x < 80 && particle.body.position.x > 0 || particle.body.position.x < 800 && particle.body.position.x > 720){
        score = score+50;
        particle = null;
        if(turn>=5){
          gamestate = "end";
        }
      }  
  }
}

if(particle != null){
  particle.display();
  if(particle.body.position.y>760){
    if(particle.body.position.x < 160 && particle.body.position.x > 80 || particle.body.position.x < 720 && particle.body.position.x > 640){
      score = score+40;
      particle = null;
      if(turn>=5){
        gamestate = "end";
      }
    }  
}
}

if(particle != null){
  particle.display();
  if(particle.body.position.y>760){
    if(particle.body.position.x < 240 && particle.body.position.x > 160 || particle.body.position.x < 640 && particle.body.position.x > 560){
      score = score+30;
      particle = null;
      if(turn>=5){
        gamestate = "end";
      }
    }  
}
}

if(particle != null){
  particle.display();
  if(particle.body.position.y>760){
    if(particle.body.position.x < 320 && particle.body.position.x > 240 || particle.body.position.x < 560 && particle.body.position.x > 480){
      score = score+20;
      particle = null;
      if(turn>=5){
        gamestate = "end";
      }
    }  
}
}

if(particle != null){
  particle.display();
  if(particle.body.position.y>760){
    if(particle.body.position.x < 400 && particle.body.position.x > 320 || particle.body.position.x < 480 && particle.body.position.x > 400){
      score = score+10;
      particle = null;
      if(turn>=5){
        gamestate = "end";
      }
    }  
}
}
 
if(turn === 5){
  gamestate = "end";
  textSize(20);
  text("GAME FINISH",390,250);
} 


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gamestate !== "end"){
    turn = turn+1;
    particle = new Particle(mouseX,10,10,10);
  }
}