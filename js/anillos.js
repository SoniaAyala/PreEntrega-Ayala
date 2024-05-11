let nombre = prompt ("Ingresá tu nombre:")

if (nombre.length >= 5) {
    console.log ("Bienvenid@ " + nombre.trim())
} else if (nombre.length <= 5) {
    console.warn("Debes escribir un nombre de mínimo 5 letras")
}

const totalCuotas1 = 2
const totalCuotas2 = 3

function verCuotas() {
    console.log ("Éstas son nuestras cuotas:")
    for (let i = 1; i <= totalCuotas1; i++){
        console.log(i, "cuotas sin interés.")
    } 
    for (let i = 3; i <= totalCuotas2; i++){
        console.log (i, "cuotas con interés")
    }
}

function verPrecios(referencia) {
    switch (referencia) {
        case 128:
            alert("Magnolia cuesta 43 €")
            break;
        case 211:
            alert("Solsire cuesta 45.99 €")
            break;
        case 333:
            alert("Serendipia cuesta 33 €")
            break;
        case 114:
            alert("Foxy cuesta 24.95 €")
            break;
        case 312:
            alert("La reina cuesta 56 €")
            break;
        default:
            console.error("Lo sentimos, no entendimos. ¡Vuelve a intentarlo!")
            break;
    }
}

function consultarPrecios () {
    let respuesta = confirm("¿Deseas comprar algunos de nuestros anillos?")

    if (respuesta === true) {
        let referencia = prompt ("Escribí el número de referencia del anillo que deseas comprar:")
        
        if (referencia !== "") {
            verPrecios(parseInt(referencia))
            verCuotas ()
        } else {
            console.warn("ingresá por favor un número de referencia válido.")
        }
    } else {
        console.log("¡Que lástima! Te esperamos hasta la próxima.")
    }
}
