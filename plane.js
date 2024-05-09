class Plane {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.isLetter = false;
      this.angle = 0;
      this.depth = 0;
    }
    
    display() {
      normalMaterial();
      
      if (this.isLetter == true) {
        noStroke();
        noFill();
        this.angle += 1;
        this.depth += 1.5*sin(this.angle);
      } else {
        this.angle += -1;
      }
      
      push();
      translate(this.x, this.y, this.depth);
      rotateX(this.angle);
      rotateY(this.angle);
      plane(size - 1/2*size);
      pop();
    }
  }