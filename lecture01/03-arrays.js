//arrays [][]

var arr=[4,5,6]
arr.unshift("xd")
arr.push(1,2,3)
console.log(arr)
arr.splice(4,undefined,"lol")
console.log(arr)
arr.splice(1,7)
console.log(arr)
for(let i =0;i<arr.length; i++) {
    console.log(arr[i])

}
const newArr= arr.filter((item)=>{
return item !=6;
})
console.log(newArr);





/*for(let i of arr){
console.log(arr[i])

}

for(let i in arr){
    console.log(arr[i])
}


arr.forEach((Element)=>{
    console.log(Element);
});*/


/*//funciones clasicas y de flechas

//clasica
function sumar(a,b){
    return a+b
}

//flecha
const sumar=(a,b)=>{
return a+b
}

const saludar=()=>{
    console.log("hola mundo")
}

//callback
()=>{}
*/

//for--- for in--- for of

