// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ListaAmigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('nombreDeAmigo');
    const nombre = inputNombre.value;

    // Para ver que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor inserte un nombre');
    } else if (ListaAmigos.includes(nombre)) { // Para que no se repitan los nombres
        alert("Este nombre ya está en la lista. Por favor ingrese un nombre diferente");
    } else {
        ListaAmigos.push(nombre);
        inputNombre.value = "";

        // Crear una lista de Amigos
        const listaElement = document.getElementById('listaAmigos');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombre; // Asigna el nombre al nuevo elemento
        listaElement.appendChild(nuevoElemento); // Agrega el nuevo elemento a la lista

        inputNombre.value = ""; // Limpia el campo de entrada después de agregar
    }
    
    return ListaAmigos; // Retorna la lista actualizada
}

//Función para sortear amigos secretos 
function sortearAmigo() {
     // Validar que haya amigos disponibles
    if (ListaAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return; // Salimos de la función si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * ListaAmigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = ListaAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
