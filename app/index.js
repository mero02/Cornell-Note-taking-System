function guardarTodo() {
    var ideas = document.getElementById('ideas-textarea').value;
    var apunte = document.getElementById('apunte-textarea').value;
    var resumen = document.getElementById('resumen-textarea').value;

    // Concatenar el contenido para el archivo .txt
    var contenido = "Ideas:\n" + ideas + "\n\nApunte:\n" + apunte + "\n\nResumen:\n" + resumen;

    // Crear un elemento de enlace para descargar el archivo .txt
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenido));
    enlaceDescarga.setAttribute('download', 'metodo_cornell.txt');
    enlaceDescarga.style.display = 'none';
    document.body.appendChild(enlaceDescarga);

    // Simular clic en el enlace para iniciar la descarga
    enlaceDescarga.click();

    // Eliminar el elemento de enlace después de la descarga
    document.body.removeChild(enlaceDescarga);

    alert("Contenido guardado correctamente.");
}
