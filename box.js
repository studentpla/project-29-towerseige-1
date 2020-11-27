class Box  {
    constructor(x, y, width, height){
      var options = {
        isStatic : false,
        density : 0.0001
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);
      this.width = width;
      this.height = height;

    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill(this.color);
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
    }
  };
