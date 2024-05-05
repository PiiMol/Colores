let c;


function preload() {
  imagenPaleta = loadImage("libraries/1.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(95, 158, 160);
  c = new Caminante(imagenPaleta); 
  imageMode( CENTER );
}

function draw() {
  c.dibujar();
  c.mover();
  
}

function keyPressed() {
  c.cambiarDireccion();
  c.mover();
}
