 alert("Bienvenido a la Formula 1")
//TIENE QUE SER CON MAYUSCULA LA X
let PalabraClave= "X"
for (let index = 0; index <=20; index++) {
    let Ingreso = prompt("para ingresar presione X")
    if(Ingreso===PalabraClave){
    alert("Bienvenido a la categoria reina del automovilismo")
    break;
    }else{
        alert("adios")
    }
}

alert("a continuacion ingrese el nombre de la entrada que quiera") 

let opcion= prompt("platea alta,platea media,platea con vista a recta")

switch (opcion) {
    case "platea alta":
        let entrada1 = prompt("tu entrada vale 500 euros, usted quiere comprar si o no")
        if(entrada1==="si"){
            alert("muchas gracias por su compra")
        }else{
            alert("Gracias por su visita")
        }
        break;
        case "platea media":
            let entrada2 =prompt("tu entrada vale 700 euros, usted quiere comprar si o no")
            if(entrada2==="si"){
                alert("muchas gracias por su compra")
            }else{
                alert("Gracias por su visita")
            }
        break;
        case "platea con vista a recta":
            let entrada3 =prompt("tu entrada vale 999 euros, usted quiere comprar si o no")
            if(entrada3==="si"){
                alert("muchas gracias por su compra")
            }else{
                alert("Gracias por su visita")
            }
        break;

    default:
        alert("muchas gracias por su visita")
        break;
}
