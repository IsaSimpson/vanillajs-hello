var frases = [
    "La bayeta de mi casa tiene miedo",
    "Temo a que mis plantas conspiren contra mí",
    "Estoy esperando una llamada de Shrek para salvar a Asno",
    "Mi sombra está en huelga y no me deja salir sin ella",
    "Mi perra aprendió a jugar al ajedrez y necesita un rival fácil",
];

// Función para obtener una frase aleatoria
function obtenerFraseAleatoria() {
    var indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
}

// Función para actualizar la frase en la página
function actualizarFrase() {
    var fraseAleatoria = obtenerFraseAleatoria();
    document.getElementById('frase').textContent = fraseAleatoria;
}

// Llamar a la función al cargar la página
actualizarFrase();