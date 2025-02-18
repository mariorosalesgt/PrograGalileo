var jugardenuevo = "SI"

while (jugardenuevo === "SI") {
var numeropc = (Math.random() * 9) + 1  
numeropc = parseInt(numeropc)  

var numerojugador = parseInt(prompt("Ingrese un número entre 1 y 9:"))

while (numerojugador < 1 || numerojugador > 9) {
numerojugador = parseInt(prompt("Número fuera de rango. Ingrese un número entre 1 y 9:"))
}

var eleccion = prompt("¿Crees que tu número es MAYOR, MENOR o IGUAL al de la computadora?").toUpperCase()

var mensaje = "La computadora eligió " + numeropc + ", usted eligió " + numerojugador + ". "

if ((numerojugador > numeropc && eleccion === "MAYOR") || 
    (numerojugador < numeropc && eleccion === "MENOR") || 
    (numerojugador === numeropc && eleccion === "IGUAL")) {
mensaje += "¡Ha adivinado!"
} else {
mensaje += "Su elección fue incorrecta."
}

alert(mensaje)

jugardenuevo = prompt("¿Quiere jugar otra vez? (SI/NO)").toUpperCase()
}

alert("Gracias por jugar Mario Rosales, 0011323")
