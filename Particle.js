class Particle {
  constructor(x, y, radius) {
    var options = {
      restitution:0.4,
      isStatic:false
    }
    this.x= x;
    this.y = y;
    this.color=color(random(0,255),random(0,255),random(0,255));
    this.radius=radius;
    this.body = Bodies.circle(this.x,this.y, this.radius, options);
  // this.image=loadImage("sprites/paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius,this.radius);
  // imageMode(CENTER);
  // image(this.image,0,0,this.radius,this.radius);
    pop();
  }
}