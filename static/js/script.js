//Declaración de variables
let cuantosDedosTengo= 20; //tipo numerico
let mostrarPi = 3.1415; //tipo numerico con parte decimal
let miSaludo = "que lo que!"; //tipo texto
let esAlumno = true; //verdadero o falso
let CuentaAtras = [3, 2, 1];
let Objeto = { nombre: "Jonathan", correo: "jonathanalquinta@liceovvh.cl", edad: 20 };
let valorIndefinido;
let Voto = null;
const siglo = "XXI";
let arregloColores = ["azul", " gris", " verde"];

// Funciones para mostrar cada valor con alert()
function mostrarcuantosDedosTengo() {
  alert("Dias del mes " + cuantosDedosTengo);
}

function mostrarmostrarPi() {
  alert("mostrar Pi: " + mostrarPi);
}

function mostrarmiSaludo() {
  alert("Saludo: " + miSaludo);
}

function mostraresAlumno() {
  alert("Es Alumno?: " + esAlumno);
}

function mostrarCuentaAtras() {
  alert("Cuenta Atras: " + CuentaAtras);
}

function mostrarObjeto() {
  alert("Usuario: " + JSON.stringify(Objeto));
}

function mostrarGenero() {
  alert("Genero: " + valorIndefinido);
}

function mostrarVoto() {
  alert("Mostrar Voto: " + Voto);
}

function mostrarsiglo() {
  alert("Siglo: " + siglo);
}

function mostrarColores() {
  alert("Colores: " + arregloColores);
}