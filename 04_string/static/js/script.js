let nombre = "Jonathan"; //variable tipo texto

function usarstring() {
    let nombre = prompt("ingrese su nombre")
    let primeraLetra = nombre[0];
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera Letra es: " + primeraLetra +
        "\nUltima letra es: " + ultimaLetra);
}

let apellido = "Alquinta"
function usarString() {
    let apellido = prompt("ingrese su apellido")
    let segundaLetra = apellido[1];
    let penultimaLetra = apellido[apellido.length - 2]
    alert("Segunda Letra Apellido es: " + segundaLetra + "\nPenultima Letra es: " + penultimaLetra);
}