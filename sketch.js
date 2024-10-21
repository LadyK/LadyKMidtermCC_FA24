

function setup() {
  createCanvas(displayWidth, displayHeight);
  
}

function draw() {
  background(0);

  for(let i = x.length - 1; i > 0 ; i--){
    x[i] = x[i - 1];
    y[i] = y[i-1];
    print(i);
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
