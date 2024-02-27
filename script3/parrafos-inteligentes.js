const body= document.querySelector('body')


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

function crearParrafo(){
    let contenedorTexto=""
    let numPalabras = Math.floor(Math.random()*(100-50)+50)
    for(let i=0;i<numPalabras;i++){

        contenedorTexto+=text[Math.floor(Math.random()*(text.length))]+" "
    
    }
    contenedorTexto+=". el parrafo tiene"+contenedorTexto.length + "caracteres."
    return contenedorTexto
}               
for(let i=0;i<5;i++){

    const parrafo =document.createElement('p')
    parrafo.textContent=crearParrafo()
   
    body.appendChild(parrafo)

}