// Declaración de variables
let anio_nacimiente = 2009;
let numeroDecimal = 3.14;
let cadenaTexto = "Hola, mundo";
let valorBooleano = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
let nombre_estudiante = "Jonathan";
let apellido_estudiante = "Alquinta";
let edad_estudiante = 16;
const mes = "Junio";

// Funciones para mostrar cada valor con alert()
function mostrar_anio_nacimiento() {
    alert("anio_nacimiento: " + anio_nacimiente);
}

function mostrarNumeroDecimal() {
    alert("Número decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
    alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
    alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
    alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
    alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
    alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
    alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
    alert("Constante mes: " + mes);
}

function mostrar_nombre_estudiante() {
    alert("nombre_estudiante" + nombre_estudiante);
}

function mostrar_apellido_estudiante() {
    alert("apellido_estudiante" + apellido_estudiante);
}

function mostrar_edad_estudiante() {
    alert("edad_estudiante" + edad_estudiante);
}