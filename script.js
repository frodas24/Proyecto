document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.group-btn');
    const screamerOverlay = document.getElementById('screamer');
    const screamerVideo = document.getElementById('video-scream');
    const botonCorrecto = Math.floor(Math.random() * botones.length) + 1;

    console.log(`El botón fantasma es la Opción ${botonCorrecto}`);

    botones.forEach((boton, index) => {
        const opcionPresionada = index + 1;
        boton.addEventListener('click', () => {
            manejarClic(opcionPresionada, botonCorrecto, screamerOverlay, screamerVideo);
        });
    });
});

function manejarClic(opcionPresionada, botonCorrecto, overlay, video) {
    document.querySelectorAll('.group-btn').forEach(b => b.disabled = true);

    if (opcionPresionada === botonCorrecto) {
        mostrarScreamer(overlay, video);
    } else {
        alert(`¡Uf! La Opción ${opcionPresionada} no tenía nada. Sigue buscando...`);
        reiniciarJuego();
    }
}

function mostrarScreamer(overlay, video) {
    overlay.style.display = 'flex'; 
    
    video.controls = false;

    video.play();

    setTimeout(() => {
        ocultarScreamer(overlay, video);
        reiniciarJuego();
    }, 4000); 
}

function ocultarScreamer(overlay, video) {
    video.pause();
    video.currentTime = 0;
    overlay.style.display = 'none';
}

function reiniciarJuego() {
    document.querySelectorAll('.group-btn').forEach(b => b.disabled = false);
    
    location.reload(); 
}