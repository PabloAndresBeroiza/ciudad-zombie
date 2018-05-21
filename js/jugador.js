/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  mover: function(x, y, tecla){
      this.x += x;
      this.y += y;
  },
  
  perderVidas: function(cant){
      this.vidas -=  cant;
  },
  
    girar: function (alto, ancho, imagen) {
        this.ancho = ancho;
        this.alto = alto;
        this.sprite = imagen;
    }

};
