function cambiarSeccion(id) {
    let secciones = document.querySelectorAll(".seccion");
    secciones.forEach(seccion => seccion.classList.remove("activa"));
    document.getElementById(id).classList.add("activa");
}

function mostrarMensaje() {
    document.getElementById("mensajeTexto").innerText = "¡Mamá, gracias por todo tu amor! 🌸💕";
}
