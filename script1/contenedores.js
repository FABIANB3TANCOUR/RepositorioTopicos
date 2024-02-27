//ciclo para generar los colores
const randomColors = [];
for (var i = 0; i < 10; i++) {
  const color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  randomColors.push(color);

}
// ciclo que genera los 10 contenedores 
for (var i = 0; i < 10; i++) {
    const container = document.createElement('div');
    container.style.width = '50px';
    container.style.height = '100px';
    container.style.backgroundColor = randomColors[i];
    document.body.appendChild(container);
  }

