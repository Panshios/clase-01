function setup() {
  createCanvas(windowWidth, windowWidth);
  colorMode(HSB,360,100,100)
  background(10,90,30);
}

function draw() {
  var gam = mouseX/10*random(1,4);
  fill(random(170,235),20,100);
  noStroke();
  ellipse(mouseX,mouseY,gam,gam);
  
}
