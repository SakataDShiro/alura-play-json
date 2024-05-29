import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo (evento){
    evento.preventDefault();
    const datosBusqueda = document.querySelector("#busqueda").value;
    const busqueda = await conexionAPI.buscarVideos(datosBusqueda);
    const lista = document.querySelector("#lista")
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));

    if(busqueda==0){
        lista.innerHTML=`<h2 class="mensaje__titulo">No hay resultados para ${datosBusqueda} </h2>`
    }
}

const boton = document.querySelector("#botonBusqueda");

const barraBusqueda = document.getElementById('busqueda');
barraBusqueda.addEventListener('keyup', function(evento){
  if (evento.key == "Enter") {
    filtrarVideo(evento)
  }
});


boton.addEventListener("click", evento => filtrarVideo(evento))