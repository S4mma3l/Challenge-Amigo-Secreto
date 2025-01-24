// Obtenemos referencias a los elementos del DOM
const agregarAmigoBtn = document.getElementById('agregarAmigo');
const nombreAmigoInput = document.getElementById('nombreAmigo');
const listaAmigosDiv = document.getElementById('listaAmigos');
const sortearAmigoBtn = document.getElementById('sortearAmigo');
const resultadoSorteoDiv = document.getElementById('resultadoSorteo');
const reiniciarJuegoBtn = document.getElementById('reiniciarJuego'); // Referencia al botón de reinicio

// Array para almacenar los nombres de los amigos
let amigos = [];

// Evento click para el botón "Añadir Amigo"
agregarAmigoBtn.addEventListener('click', () => {
  const nombreAmigo = nombreAmigoInput.value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre de amigo.");
    return;
  }

  amigos.push(nombreAmigo);
  nombreAmigoInput.value = "";

  // Actualizamos la lista de amigos en el HTML
  mostrarAmigos();
});

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
  listaAmigosDiv.innerHTML = "";
  amigos.forEach(amigo => {
    let amigoElement = document.createElement('p');
    amigoElement.textContent = amigo;
    listaAmigosDiv.appendChild(amigoElement);
  });
}

// Evento click para el botón "Sortear Amigo Secreto"
sortearAmigoBtn.addEventListener('click', () => {
  if (amigos.length === 0) {  // Verificar si no quedan amigos
    alert("¡Se agotaron los amigos! Reinicia el juego para volver a jugar.");
    return;
  }

  let indiceAleatorio;
  let amigoSorteado;

  do {
    indiceAleatorio = Math.floor(Math.random() * amigos.length);
    amigoSorteado = amigos[indiceAleatorio];
  } while (amigoSorteado === null); 

  resultadoSorteoDiv.textContent = `¡Te tocó ${amigoSorteado}!`;
  amigos[indiceAleatorio] = null; 

  // Verificar si quedan amigos después del sorteo
  if (amigos.every(amigo => amigo === null)) {
    setTimeout(() => {  // Mostrar la alerta después de un breve retraso
      alert("¡Se agotaron los amigos! Reinicia el juego para volver a jugar.");
    }, 500); 
  }
});

// Evento click para el botón "Reiniciar Juego"
reiniciarJuegoBtn.addEventListener('click', () => {
  amigos = []; // Limpiar el array de amigos
  listaAmigosDiv.innerHTML = ""; // Limpiar la lista de amigos en el HTML
  resultadoSorteoDiv.textContent = ""; // Limpiar el resultado del sorteo
});