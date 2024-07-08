document.addEventListener('DOMContentLoaded', function() {
    const formCrearUsuario = document.getElementById('formulario');

    formCrearUsuario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Mostrar los valores en la consola para verificar
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);

        // // Preparar los datos para enviar al servidor
        // const formData = {
        //     nombre: nombre,
        //     email: email,
        //     mensaje: mensaje
        // };

        formCrearUsuario.submit()
    });
});
