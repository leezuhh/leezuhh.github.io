let bubbles = [];
let gravity = 0.1;
let index = 0;
let s = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(204, 245, 255);
  s = second()
  if (mouseIsPressed) {
    bubbles[index] = new Ball(mouseX, mouseY, 25);
    bubbles[index].show();
    index += 1
  }
  for (let i=0; i<bubbles.length; i++){
      bubbles[i].move();
      bubbles[i].show();
    }
  if (keyIsPressed) {
    if (bubbles.length > 0){
      popped();
      index -= 1;
    }
  }
}


class Ball {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  show(){
    stroke(4, 74, 92);
    fill(3, 202, 252, 20)
    ellipse(this.x, this.y, this.r*2);
  }
  
  move(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
}

function popped() {
      for (let i=1; i<bubbles.length; i++){
        bubbles[i-1] = bubbles[i]
      }
      bubbles.pop()
}