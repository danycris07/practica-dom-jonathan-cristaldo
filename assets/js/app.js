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


// Captura de elementos del DOM
const contenedorCards = document.getElementById('contenedor-cards');
const inputBuscar = document.getElementById('input-buscar');
const btnBuscar = document.getElementById('btn-buscar');

/**
 FUNCIÓN RENDERIZAR CARDS
  Borra el contenedor e inyecta dinámicamente las cards según el arreglo que reciba.
 */
function renderizarCards(listaPersonajes) {
    // Limpiamos el contenedor para evitar que se dupliquen
    contenedorCards.innerHTML = "";

    // Mensaje por si no se encuentran personajes tras filtrar
    if (listaPersonajes.length === 0) {
        contenedorCards.innerHTML = `<p class="text-center text-warning w-100 my-4">No se encontraron superhéroes.</p>`;
        return;
    }

    // Recorremos el arreglo recibido
    listaPersonajes.forEach(personaje => {
        // USO DE DESESTRUCTURACIÓN (Requisito obligatorio)
        const { id, nombre, imagen } = personaje;

        // USO DE TEMPLATE LITERALS (Requisito obligatorio) para armar la estructura de la card
        const cardHTML = `
            <div class="col">
                <div class="card h-100 bg-secondary text-light border border-dark card-heroe shadow-sm">
                    <img src="${imagen}" class="card-img-top" alt="Imagen de ${nombre}">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title fw-bold text-center">${nombre}</h5>
                        <button class="btn btn-danger btn-sm w-100 mt-3 fw-bold btn-eliminar" data-id="${id}">
                            Eliminar personaje
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Añadimos la card al contenedor. se utiliza += para acumular las card en ves de sobrescribir el contenido
        contenedorCards.innerHTML += cardHTML;
    });
}

/**
  FILTRO POR NOMBRE
  Busca coincidencias parciales sin distinguir mayúsculas de minúsculas al presionar el botón de búsqueda.
 */
btnBuscar.addEventListener('click', () => {
    const textoBusqueda = inputBuscar.value.toLowerCase().trim();

    // Filtramos el arreglo original guardando los que coincidan con el texto introducido
    const personajesFiltrados = personajes.filter(p => p.nombre.toLowerCase().includes(textoBusqueda));

    // Renderizamos únicamente los elementos que pasaron el filtro
    renderizarCards(personajesFiltrados);
});

// EVENTO INICIAL: Se ejecuta cuando todo el DOM está cargado para mostrar los 5 personajes por primera vez
document.addEventListener('DOMContentLoaded', () => {
    renderizarCards(personajes);
});