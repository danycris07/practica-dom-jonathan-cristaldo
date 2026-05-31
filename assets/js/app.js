const personajes = [
{ id: 1, nombre: "A-Bomb", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
{ id: 2, nombre: "Abe Sapien", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
{ id: 3, nombre: "Abin Sur", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
{ id: 4, nombre: "Abomination", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
{ id: 5, nombre: "Abraxas", imagen:
"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" },
];

const formularioHeroe = document.getElementById('formulario-heroe');


/**
  FORMULARIO PARA AGREGAR PERSONAJE
  Escucha el submit, crea un objeto y lo introduce de forma segura en la constante original.
 */
formularioHeroe.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el recargado de la pagina

    const nombreInput = document.getElementById('input-nombre').value.trim();
    const imagenInput = document.getElementById('input-imagen').value.trim();

    // Creamos el nuevo objeto con un ID único basado en milisegundos
    const nuevoHeroe = {
        id: Date.now(),
        nombre: nombreInput,
        imagen: imagenInput
    };

    // Al ser un arreglo constante, usamos .push() para modificar su contenido sin reasignar la variable
    personajes.push(nuevoHeroe);

    // Actualizamos la interfaz renderizando el arreglo completo actualizado
    renderizarCards(personajes);

    // Limpiamos los inputs del formulario
    formularioHeroe.reset();
});

/**
  ELIMINAR PERSONAJE
  Aplicamos Delegación de Eventos escuchando los clicks en el contenedor de las cards.
 */
contenedorCards.addEventListener('click', (e) => {
    // Comprobamos si el usuario hizo click específicamente en un botón de eliminar
    if (e.target.classList.contains('btn-eliminar')) {
        const idEliminar = parseInt(e.target.getAttribute('data-id'));

        // Buscamos la posición (índice) exacto del personaje dentro de la constante original
        const indice = personajes.findIndex(p => p.id === idEliminar);

        // Si el índice existe, removemos el elemento usando .splice() sin reasignar la constante
        if (indice !== -1) {
            personajes.splice(indice, 1);
        }

        // Volvemos a dibujar las cards vigentes
        renderizarCards(personajes);
    }
});