document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los HTML
    const form = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const edadInput = document.getElementById('edad');
    const alturaInput = document.getElementById('altura');
    const emailInput = document.getElementById('email');
    const mensajesValidacionDiv = document.getElementById('mensajesValidacion');

    // evento que ocurre en el form
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        // Prevent evita que al enviar el formulario la pagina
        // se recargue por defecto y asi mostrar la informacion

        //limpiamos los mensajes y colores anteriores 
        mensajesValidacionDiv.innerHTML = ''; // Vacia el Div
        mensajesValidacionDiv.classList.remove('succes','error'); // Elimina el color

        let errores = []; // En este array almacenaremos los errores

        // Validaciones
        const nombre = nombreInput.value.trim(); // Trim elimina los espacios en blanco
        if (nombre === '') {
            errores.push('Debe colocar un nombre para continuar. ');
        } else if (nombre.lenght > 50) {
            errores.push('No puedes exceder los 50 caracteres. ');
        }

        const apellido = apellidoInput.value.trim();
        if (apellido === '') {
            errores.push('Debe colocar un apellido para continuar. ');
        } else if (apellido.lenght > 50) {
            errores.push('No puedes exceder los 50 caracteres. ');
        }

        const edad = parseInt(edadInput.value); // parseInt lo vuelve entero
        if (isNaN(edad) || edad < 0) { // NaN devuelve un 'true' si el valor no es un numero
            errores.push('La edad debe ser positiva. ');
        } else if (edad < 18) {
            errores.push('Tiene que ser mayor de edad (18 años como minimo). ');
        }

        const altura = parseFloat(alturaInput.value); // parseFloat lo vuelve flotante
        if (isNaN(altura) || altura < 0) {
            errores.push('La altura debe ser positiva. ');
        } else if (altura > 230) {
            errores.push('No puede superar los 230 cm. ');
        }

        const email = emailInput.value.trim(); 
        if (email === '') {
            errores.push('El email no puede estar vacio. ');
        } else if (!email.includes('@')) { // include('@') verifica si contiene el arroba
            errores.push('No puedes exceder los 50 caracteres. ');
        }

        // Mostramos las validaciones
        if (errores.length > 0) {
            // Los errores aparecen en rojo
            mensajesValidacionDiv.classList.add('error'); // al estilo rojo le colocamos la clase ERROR
            const ul = document.createElement('ul'); // Lista desordenada
            errores.forEach(error => { //Itera sobre cada error
                const li = document.createElement('li'); // Elemento de lista
                li.textContent = `• ${error}`; // Asignamos el error al <li>
                ul.appendChild(li); // Agrega <li> como hijo de <ul>
            });
            mensajesValidacionDiv.appendChild(ul); // Agrega la <ul> completa
        } else {
            // Mensaje de exito verde, no hay errores.
            mensajesValidacionDiv.classList.add('success'); // Estilo verde en la clase 'success
            mensajesValidacionDiv.innerHTML = '<p>&#10003; ¡Datos Cargados Exitosamente! Formulario enviado.</p>';
            // Parrado con mensaje de exito en el div
            form.reset(); // Restablece todos los campos del formulario
        }
    });
});