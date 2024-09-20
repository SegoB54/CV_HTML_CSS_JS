document.addEventListener('DOMContentLoaded', function() {
    var nombrePerfil = document.querySelector('.header-section h1');
    
    nombrePerfil.addEventListener('click', function() {
        alert('Bienvenido al currículum de Brian Segoviano');
    });
});