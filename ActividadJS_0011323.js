
var mes = prompt("Ingresa tu mes de nacimiento del 1 al 12")
var dia = prompt("Ingresa tu día de nacimiento del 1 al 31:")

var signo = ""

if (mes == "3") {
    if (dia >= "21") {
        signo = "Aries"
    } else {
        signo = "Piscis"
    }
} else if (mes == "4") {
    if (dia <= "19") {
        signo = "Aries"
    } else {
        signo = "Tauro"
    }
} else if (mes == "5") {
    if (dia <= "20") {
        signo = "Tauro"
    } else {
        signo = "Géminis"
    }
} else if (mes == "6") {
    if (dia <= "20") {
        signo = "Géminis"
    } else {
        signo = "Cáncer"
    }
} else if (mes == "7") {
    if (dia <= "22") {
        signo = "Cáncer"
    } else {
        signo = "Leo"
    }
} else if (mes == "8") {
    if (dia <= "22") {
        signo = "Leo"
    } else {
        signo = "Virgo"
    }
} else if (mes == "9") {
    if (dia <= "22") {
        signo = "Virgo"
    } else {
        signo = "Libra"
    }
} else if (mes == "10") {
    if (dia <= "22") {
        signo = "Libra"
    } else {
        signo = "Escorpio"
    }
} else if (mes == "11") {
    if (dia <= "21") {
        signo = "Escorpio"
    } else {
        signo = "Sagitario"
    }
} else if (mes == "12") {
    if (dia <= "21") {
        signo = "Sagitario"
    } else {
        signo = "Capricornio"
    }
} else if (mes == "1") {
    if (dia <= "19") {
        signo = "Capricornio"
    } else {
        signo = "Acuario"
    }
} else if (mes == "2") {
    if (dia <= "18") {
        signo = "Acuario"
    } else {
        signo = "Piscis"
    }
}

switch (signo) {
    case "Aries":
    case "Leo":
    case "Sagitario":
        console.log("Tu signo es " + signo)
        break;
    case "Tauro":
    case "Virgo":
    case "Capricornio":
        console.log("Tu signo es " + signo)
        break;
    case "Géminis":
    case "Libra":
    case "Acuario":
        console.log("Tu signo es " + signo)
        break;
    case "Cáncer":
    case "Escorpio":
    case "Piscis":
        console.log("Tu signo es " + signo)
        break;
    default:
        console.log("Signo Zodiacal invalido. Verifica tu fecha de nacimiento.")
}
