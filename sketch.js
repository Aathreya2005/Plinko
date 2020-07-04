
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var divisions=[];
var plinkos=[];

var divisionHeight=100;

function setup(){
  var canvas = createCanvas(480,400);
  engine = Engine.create();
  world = engine.world;
  g1=new Ground(240,395,width,10);
  for(var k=0;k<=width;k+=80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j<=width-20;j+=40){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-20;j+=40){
    plinkos.push(new Plinko(j,125));
  }
  for(var j=40;j<=width-20;j+=40){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=15;j<=width;j+=40){
    plinkos.push(new Plinko(j,225));
  }
  
  
}
function draw(){
background(0);
Engine.update(engine);
g1.display();
for(var j=0;j<particles.length;j++){
  particles[j].display();
}
for(var k=0;k<divisions.length;k++){
  divisions[k].display();
}
for(var i=0;i<plinkos.length;i++){
  plinkos[i].display();
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,7));
}


}
