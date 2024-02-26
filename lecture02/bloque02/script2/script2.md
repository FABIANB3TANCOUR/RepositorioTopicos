# script 2: contenedores aleatorios sin colores repetidos

## este codigo utiliza una sintaxis similar al anterior, con la direfenci de que los contenedores contienen colores que no se deben repetir.

1. Claro, este código en JavaScript tiene dos partes similares al código anterior, pero con una diferencia fundamental en la generación de colores aleatorios para evitar la repetición de colores.

1.La primera parte es un bucle while que genera 20 colores aleatorios únicos y los guarda en un array llamado randomColors. Aquí está el bucle while:
```
const randomColors = [];
while (randomColors.length < 20) {
  const color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  if (!randomColors.includes(color)) {
    randomColors.push(color);
  }
}
```
En cada iteración del bucle while, se genera un color aleatorio en formato hexadecimal y se verifica si ese color ya está presente en el array randomColors. Si el color no está en el array, se agrega a randomColors. Esto asegura que no se repitan los colores en el array.

2.La segunda parte del código es un bucle for que utiliza los colores generados anteriormente para crear 20 contenedores en el DOM, cada uno con un color diferente. Aquí está el bucle for:
```
for (var i = 0; i < 20; i++) {
  const container = document.createElement('div');
  container.style.width = '50px';
  container.style.height = '100px';
  container.style.backgroundColor = randomColors[i];
  document.body.appendChild(container);
}
```
En cada iteración de este bucle, se crea un nuevo elemento div, se le establecen propiedades de ancho, alto y color de fondo basadas en los colores aleatorios generados anteriormente, y se agrega al final del cuerpo del documento HTML.