document.addEventListener("DOMContentLoaded", function() {
    const cambiarImagen = document.getElementById("cambiar-imagen");
    const fotoArchivo = document.getElementById("foto-archivo");
    const imagenUsuario = document.getElementById("imagen-usuario");

    cambiarImagen.addEventListener("click", function(event) {
        event.preventDefault();
        fotoArchivo.click();
    });

    fotoArchivo.addEventListener("change", function() {
        const archivo = this.files[0];
        if (archivo) {
            const lector = new FileReader();
            lector.onload = function(event) {
                imagenUsuario.src = event.target.result;
            };
            lector.readAsDataURL(archivo);
        }
    });
});