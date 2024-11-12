document.addEventListener("DOMContentLoaded", function () { 
    const frases = [
        "Más allá de la pantalla",
        "Dedicación y detalle en cada proyecto",
        "Experiencia en cada línea de código",
        "Ideas que toman forma",
        "Más Allá del Código"
    ];
    
    const elemento = document.querySelector(".inicio h2");
    let fraseIndex = 0;
    let indice = 0;
    let borrando = false;

    function escribirYBorrarTexto() {
        const texto = frases[fraseIndex]; // Frase actual

        if (!borrando && indice < texto.length) {
            // Escribir
            elemento.textContent += texto.charAt(indice);
            indice++;
            setTimeout(escribirYBorrarTexto, 100); // Velocidad de tipeo
        } else if (borrando && indice > 0) {
            // Borrar
            elemento.textContent = texto.substring(0, indice - 1);
            indice--;
            setTimeout(escribirYBorrarTexto, 50); // Velocidad de borrado
        } else {
            // Cambia el estado: de escribir a borrar y viceversa
            if (!borrando) {
                borrando = true;
                setTimeout(escribirYBorrarTexto, 1000); // Pausa antes de borrar
            } else {
                borrando = false;
                indice = 0;
                fraseIndex = (fraseIndex + 1) % frases.length; // Siguiente frase (en ciclo)
                setTimeout(escribirYBorrarTexto, 500); // Pausa antes de escribir nueva frase
            }
        }
    }

    escribirYBorrarTexto();
});