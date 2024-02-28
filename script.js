let intentos = 6;
let diccionario = ['TANGO', 'BOCAA', 'MATES', 'PIBES', 'ASADO', 'GUITA', 'CHICO', 'CHICA', 'BOLSA', 'GUISO', 'PERRO', 'GENTE', 'LUCHO', 'BANCO', 'DIEGO', 'FULBO', 'CHIPA', 'RIBER', 'PORRO', 'MESSI' , 'JUEGO'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
window.addEventListener('load', init);
function init() {
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
}
const button = document.getElementById("guess-button");
function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        console.log("GANASTE!");
        terminarJuego("<h1>GANASTE! :)</h1>");
        return;
    }
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) {
            console.log(INTENTO[i], "VERDE");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if (palabra.includes(INTENTO[i])) {
            console.log(INTENTO[i], "AMARILLO");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {
            console.log(INTENTO[i], "GRIS");
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--;
    if (intentos === 0) {
        console.log("PERDISTE!");
        terminarJuego("<h1>PERDISTE! :(</h1>");
    }
}
button.addEventListener("click", intentar);
function leerIntento() {
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase();
    return intento;
}
function terminarJuego(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
    const CORRECT_WORD_ROW = document.createElement('div');
    CORRECT_WORD_ROW.className = 'row';
    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        SPAN.innerHTML = palabra[i];
        SPAN.style.backgroundColor = 'green'; 
        CORRECT_WORD_ROW.appendChild(SPAN);
    }
    GRID.appendChild(CORRECT_WORD_ROW);
}
const GRID = document.getElementById("grid");