async function listarVideos(){
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida = conexion.json();
    return conexionConvertida;
};

async function enviarVideo(titulo,descripcion,url,imagen){
    const conexion = await fetch("http://localhost:3001/videos", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        /*Convertir un elemento tipo objecto a uno tipo string*/
        body:JSON.stringify({
            titulo:titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url:url,
            imagen:imagen
        })
    });
    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;
}

async function buscarVideos(palabraClave){
    try {
        const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`)
        const conexionConvertida = await conexion.json();
        return conexionConvertida
    } catch {
        console.log("Error al intentar")
    }
}
export const conexionAPI={
    listarVideos, enviarVideo, buscarVideos
}