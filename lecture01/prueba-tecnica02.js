class Persona {

    constructor(nombre,direccion,telefono,edad){
        this.nombre=nombre
        this.direccion=direccion
        this.telefono=telefono
        this.edad=edad

    }

}

const directorio=[]
function validarDatos(){
  while(directorio.length<5) {
    const nombre = prompt('ingrese su nombre')
    const direccion = prompt('igrese su direccion ')
    const telefono = prompt('ingrese su telefono')
    const edad = prompt("ingrese su edad")
    if (nombre!=""&& direccion!="" && edad!="" && !isNaN(telefono)) {
      const persona = new Persona(nombre,direccion,telefono,edad)
      directorio.push(persona)
     } else{
  console.log("uno o mas campos estan imcompletos")
     }
   }
  } 
  validarDatos()

function validarEdad(){
if(!isNaN(Persona.edad)){
  console.log("validacion exitosa")
}
}

function edadPromedio(){
  let suma = 0
 directorio.map((Persona)=> {
  console.log("nom. de la persona: ")
  console.log(Persona.nombre)
  console.log("edades de la persona: ")
  console.log(Persona.edad)
  suma+= Number(Persona.edad)
 })
 console.log("promedio de edades")
 console.log(suma/directorio.length)

}

function nombresOrdenados(){
console.log("nombres Odernados alfabeticamente y mostrados en mayuscula")
directorio.sort((A,B)=> A.nombre.localeCompare(B.nombre))
directorio.map((Persona)=> {
  console.log(Persona.nombre.toUpperCase())
})

}






