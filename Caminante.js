class Caminante {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.vel = 2;
    this.dir = 0;
    this.der = 150;
    this.colores = ['#880016', '#e6e82d', '#CBC3EF', '#0f305b', '#c9641e', '#751b7b', '#d682fe'];
    this.radio = 7; 
    this.espacio = 1; 
    this.longitudLinea = 21; 
  }
  
  dibujar() {
    push(); 
    translate(this.x, this.y);
    rotate(radians(this.der));
    noStroke();
    let separacionTotal = this.radio * 2 + this.espacio; 
    let posXInicial = -this.longitudLinea / 2 + this.radio; 
    let posY = 0;
    for (let i = 0; i < this.colores.length; i++) {
      fill(this.colores[i]);
      let posX = posXInicial + i * separacionTotal;
      ellipse(posX, posY, this.radio * 2, this.radio * 2); 
    }
    pop(); 
  }
  
  mover() {
    if (keyIsPressed) {
      this.dir += 5;
    }
    this.x = this.x + this.vel * cos(radians(this.dir));
    this.y = this.y + this.vel * sin(radians(this.dir));
  }
  
  cambiarDireccion() {
    this.dir = random(0, 360);
  }
  
  actualizarYDibujar() {
    this.mover();
    this.dibujar();
  }
}
