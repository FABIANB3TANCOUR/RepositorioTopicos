# script3: parrafos inteligentes
## el siguiente codigo genera parrafos con texto aleatorio

1.Selecciona el elemento body del documento HTML utilizando document.querySelector('body') y lo almacena en la variable body.
```
const body= document.querySelector('body')

```
2.Define un array llamado text que contiene 100 palabras.
```
const text = [
                    "manzana", "perro", "gato", "casa", "amarillo", "azul", "rojo", "verde", "playa", "montaña",
                    "computadora", "teléfono", "libro", "canción", "baile", "familia", "amigo", "pelicula", "futbol", "juego",
                    "silla", "mesa", "ciudad", "viaje", "comida", "musica", "arte", "estudio", "trabajo", "vacaciones",
                    "alegría", "amor", "paz", "felicidad", "éxito", "dinero", "risa", "lluvia", "sol", "naturaleza",
                    "aventura", "conocimiento", "deseo", "esperanza", "sueño", "realidad", "imaginación", "creatividad", "inspiración", "motivación",
                    "pasión", "belleza", "juventud", "vejez", "salud", "bienestar", "energía", "calma", "paciencia",
                    "valor", "comprensión", "tolerancia", "amabilidad", "respeto", "honestidad", "bondad", "solidaridad", "humildad", "gratitud",
                    "coraje", "determinación", "perseverancia", "responsabilidad", "compromiso", "puntualidad", "sinceridad", "optimismo", "pensamiento", "comunicación",
                    "escritura", "lectura", "aprendizaje", "enseñanza", "investigación", "descubrimiento", "innovación", "crecimiento", "desarrollo", "cambio",
                    "equilibrio", "armonía", "confianza", "fe", "religión", "espiritualidad", "meditación", "reflexión", "pensamiento", "filosofía"
                  ];
```
3.Declara una función llamada crearParrafo que genera un párrafo aleatorio con un número aleatorio de palabras seleccionadas al azar del array text.
```
function crearParrafo(){
    let contenedorTexto=""
    let numPalabras = Math.floor(Math.random()*(100-50)+50)
    for(let i=0;i<numPalabras;i++){

        contenedorTexto+=text[Math.floor(Math.random()*(text.length))]+" "
    
    }
    contenedorTexto+=". el parrafo tiene"+contenedorTexto.length + "caracteres."
    return contenedorTexto
}               
```
4.Dentro de la función crearParrafo, se genera un número aleatorio de palabras entre 50 y 100, y luego se seleccionan palabras aleatorias del array text para formar el contenido del párrafo.

5.Al final del párrafo, se agrega un mensaje indicando la cantidad de caracteres que tiene el párrafo.

6.Utiliza un bucle for para crear 5 párrafos.
7.Para cada iteración del bucle, se crea un nuevo elemento de párrafo (<p>) utilizando document.createElement('p'), se le asigna el contenido generado por la función crearParrafo mediante la propiedad textContent, y luego se agrega este párrafo al final del cuerpo del documento HTML utilizando body.appendChild(parrafo).
```
for(let i=0;i<5;i++){

    const parrafo =document.createElement('p')
    parrafo.textContent=crearParrafo()
   
    body.appendChild(parrafo)

}
```