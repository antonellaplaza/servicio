function ampliarImagen(img) {
    const visor = document.getElementById("visor");
    const imagenAmpliada = document.getElementById("imagen-ampliada");
    imagenAmpliada.src = img.src;
    visor.style.display = "flex";
}

function cerrarImagen() {
    document.getElementById("visor").style.display = "none";
}

