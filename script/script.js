// Obtener la imagen de perfil
var perfil = document.getElementById('perfil');

// Agregar un event listener para el clic
perfil.addEventListener('click', function() {
    // Alternar entre agrandar y volver al tamaño original
    if (perfil.style.transform === 'scale(1.4)') {
        perfil.style.transform = 'scale(1)';
    } else {
        perfil.style.transform = 'scale(1.4)';
    }
});
