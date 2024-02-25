class Libro {
    constructor(titulo, autor, fechaPublicacion, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.fechaPublicacion = fechaPublicacion;
      this.genero = genero;
    }
  
    obtenerInformacion() {
      return ${this.titulo} - Autor: ${this.autor}, Publicado en: ${this.fechaPublicacion}, Género: ${this.genero};
    }
  }
  
  const libros = [];
  
  function agregarLibro() {
    const titulo = prompt("Ingrese el título del libro:");
    const autor = prompt("Ingrese el autor del libro:");
    const fechaPublicacion = prompt("Ingrese la fecha de publicación (AAAA):");
    const genero = prompt("Ingrese el género del libro (aventura, terror, fantasía):");
  
    if (!titulo || !autor || !fechaPublicacion || !genero) {
      alert("Por favor, complete todos los campos.");
      return;
    }
  
    if (isNaN(fechaPublicacion) || fechaPublicacion.length !== 4) {
      alert("El año debe ser un número de 4 dígitos.");
      return;
    }
  
    if (genero !== "aventura" && genero !== "terror" && genero !== "fantasía") {
      alert("Género no válido. Debe ser aventura, terror o fantasía.");
      return;
    }
  
    const libro = new Libro(titulo, autor, fechaPublicacion, genero);
    libros.push(libro);
  }
  
  function mostrarLibros() {
    libros.forEach(libro => console.log(libro.obtenerInformacion()));
  }
  
  function mostrarAutoresOrdenados() {
    const autoresOrdenados = libros.map(libro => libro.autor).sort();
    console.log(autoresOrdenados);
  }
  
  function mostrarLibrosPorGenero() {
    const genero = prompt("Ingrese el género para filtrar (aventura, terror, fantasía):");
  
    if (genero !== "aventura" && genero !== "terror" && genero !== "fantasía") {
      alert("Género no válido. Debe ser aventura, terror o fantasía.");
      return;
    }
  
    const librosFiltrados = libros.filter(libro => libro.genero === genero);
    librosFiltrados.forEach(libro => console.log(libro.obtenerInformacion()));
  }
  
  // Ejemplo de uso
  agregarLibro();
  agregarLibro();
  agregarLibro();
  
  mostrarLibros();
  mostrarAutoresOrdenados();
  mostrarLibrosPorGenero();