//ciclo para generar los colores sin repetirse
const randomColors = [];
while (randomColors.length<20) {
  const color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  if (!randomColors.includes(color)) {
  randomColors.push(color);
  }
}
// ciclo que genera los 20 contenedores, pero sin repetir los colores
for (var i = 0; i < 20; i++) {
    const container = document.createElement('div');
    container.style.width = '50px';
    container.style.height = '100px';
    container.style.backgroundColor = randomColors[i];
    document.body.appendChild(container);
  }
