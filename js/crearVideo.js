import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("#formulario")

async function crearVideo(evento){
    evento.preventDefault();
    const titulo = document.querySelector("#titulo").value;
    const url = document.querySelector("#url").value;
    const imagen = document.querySelector("#imagen").value;
    const descripcion = Math.floor(Math.random*10).toString();

    try {
        await conexionAPI.enviarVideo(titulo, descripcion, url, imagen);
        window.location.href="../pages/envio-concluido.html";
    }catch(e){
        alert(e)
    }
    
}

formulario.addEventListener("submit", evento => crearVideo(evento));