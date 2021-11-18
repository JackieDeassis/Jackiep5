var diam1 = 10;
var r1,r2 = 255;
var g1,g2 = 255;
var b1,b2 = 255; 

function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here
     background("#242d33");
     
     //middle circle
     fill(255,230,0);
     noStroke();
     //this ellipse is grow
     ellipse(250,250,diam1,diam1);
     //top left circle
     fill(b2,g2,r2);
     stroke("#fdfd7f");
     strokeWeight(3);
     ellipse(80,100,70,70);
     //bottom left circle
     fill(r1,g1,b1);
     ellipse(80,400,70,70);
     //top right circle
     stroke("#fdfd7f");
     strokeWeight(3);
     fill(r1,g1,b1);
     ellipse(417,100,70,70);
     //bottom right circle
     fill(b2,g2,r2);
     ellipse(417,400,70,70);
     //ellipse needs for value in this order: x position, y position, diam1, diam2)
     //this ellipse follows the mouse
     fill("#40d6e3")
     ellipse(mouseX,mouseY,15,15);
     fill("#6869fb");
     noStroke();
     textSize(35);
     textFont("Century Gothic");
     textStyle("ITALTC");
     text("Solar System", width-338 ,165);
     diam1 = diam1+1;
   
}

function mousePressed(){ 
  r1 = random(0,255);
  g1 = random(0,255);
  b1 = random(0,255);
  r2 = random(0,255);
  g2 = random(0,255);
  b2 = random(0,255);
  diam1 = diam1+15;
}