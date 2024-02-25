class Libro {

    constructor(titulo,autor,año,genero){
        this.titulo=titulo
        this.autor=autor
        this.año=año
        this.genero=genero

    }
 
informacionTotalLibro(){
return `el libro se llama ${titulo}, fue escrito por ${autor}, fue publicado en el año de ${año} y pertenece
al genero ${genero} `
}
}
const libros=[]

  while(libros.length<3) {
   const titulo = prompt('nombre del libro')
   const autor = prompt('nombre del autor')
   const año = prompt('año de publicacion')
   const genero = prompt("genero del libro")

   if (titulo!="" && autor!="" && !isNaN(año) && año.length==4 && genero=="fantasia"||genero=="aventura"||genero=="terror") {
     const libro = new Libro(titulo,autor,año,genero)
     libros.push(libro)
    }
  } 
 


function mostrarLibros(){
   libros.map((Libro)=> {
    console.log("titulo del libro: "+ Libro.titulo)
    console.log("nombre del aultor: "+ Libro.autor)
    console.log("año de publiacion: "+ Libro.año)
    console.log("genero del libro: "+ Libro.genero)
   })
}
function autoresOrdenados(){
  console.log("autores ordenados alfabeicamente")
const autoresOrdenados=libros.map(Libro=>Libro.autor).sort()
console.log(autoresOrdenados)
}

function mostrarPorGenero(){
  
   const LibroSolicitado = prompt('que genero desea buscar')
 const librosGenero = libros.filter(libro =>libro.genero.includes(LibroSolicitado.toLowerCase()) )
librosGenero.forEach(Libro => {
  console.log("             ")
  console.log("busqueda por genero")
  console.log("titulo del libro:" + Libro.titulo)
  console.log("autor del libro:" + Libro.autor)
  console.log("fecha de publicacion:" + Libro.año)
  console.log("genero del libro:" + Libro.genero)
})
}




