let total = 0
let opcion
let mensaje = "Ingrese una opción para comprar\n1) Alimento de perro 1kg - $1000\n2) Alimento de gato 1kg - $800\n3) Collar perro - $750\n4) Collar gato - $450\n5) Piedra sanitarias 1kg - $400\n6) Ver total a pagar\n7) Pagar\n8) Vaciar carro\n9) Salir"

alert("Hola bienvenido/a a nuestro PetShop!")

do {
    opcion = parseInt(prompt(mensaje))
    if (isNaN(opcion)) {
        alert("Inserte un número para elegir una opción")
    } else {
        calcularCompra(opcion)
        if (opcion === 6) {
            if (total === 0) {
                alert("No seleccionó ningún producto")
            } else {
                alert("Su monto a pagar es: $" + total)
            }
        } else if (opcion === 7) {
            if (total === 0) {
                alert("No seleccionó ningún producto")
            } else {
                alert("Su pago de $" + total + " se realizó con éxito")
                total = 0
            }
        } else if (opcion === 8) {
            alert("Se vació el carrito")
            total = 0
        }
    }

} while (opcion !== 9)

alert("Adiós gracias por visitar la tienda online")

function calcularCompra(opcion) {
    if (opcion === 1) {
        alert("Alimento de perro 1kg añadido al carrito")
        total += 1000
    } else if (opcion === 2) {
        total += 800
        alert("Alimento de gato 1kg añadido al carrito")
    } else if (opcion === 3) {
        alert("Collar perro añadido al carrito")
        total += 750
    } else if (opcion === 4) {
        alert("Collar gato añadido al carrito")
        total += 450
    } else if (opcion === 5) {
        alert("Piedra sanitarias 1kg añadido al carrito")
        total += 400
    }
}