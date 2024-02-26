# scrpit1: contenedores

## este script contiene un codigo que genera 10 contenedores a los cuales se les asigna un color aleatorio

1. La primera parte es un bucle que genera 10 colores aleatorios y los guarda en un array llamado randomColors. Aquí está el bucle:
 
```
const randomColors = [];
for (var i = 0; i < 10; i++) {
  const color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  randomColors.push(color);

}
```

En cada iteración del bucle, se genera un color aleatorio en formato hexadecimal y se agrega al array randomColors.

2. La segunda parte del código es otro bucle que utiliza los colores generados anteriormente para crear 10 contenedores en el DOM, cada uno con un color diferente. Aquí está el segundo bucle:
```
for (var i = 0; i < 10; i++) {
    const container = document.createElement('div');
    container.style.width = '50px';
    container.style.height = '100px';
    container.style.backgroundColor = randomColors[i];
    document.body.appendChild(container);
  }

```
En cada iteración de este bucle, se crea un nuevo elemento div, se le establecen propiedades de ancho, alto y color de fondo basadas en los colores aleatorios generados anteriormente, y se agrega al final del cuerpo del documento HTML.