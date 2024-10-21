let x = new Array(50);
let y = new Array(50);

let num = []; // an empty array

function setup() {
  createCanvas(displayWidth, displayHeight);
  print(num.length);
  print(x.length);
  noStroke();
  fill(255, 102);
}

function draw() {
  background(0);

  for(let i = x.length - 1; i > 0 ; i--){
    x[i] = x[i - 1];
    y[i] = y[i-1];
  }

  x[0] = mouseX;
  y[0] = mouseY;

  // an array
 for(let i = 0; i < x.length; i++){
   ellipse(x[i], y[i], i/2, i/2);
 }

 //num.push(mouseX); <-- bad idea
 print(num.length);

}
