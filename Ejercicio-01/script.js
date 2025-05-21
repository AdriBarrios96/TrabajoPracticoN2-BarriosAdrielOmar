document.addEventListener('DOMContentLoaded', () => {
    // Primero hacemos referencias a los elementos del HTML
    const estaturaInput = document.getElementById('estatura');
    const pesoInput = document.getElementById('peso');
    const calcular = document.getElementById('calcularBtn');

    // Ahora ejecutaremos el boton 'calcular' al clickearlo
    calcular.addEventListener('click', calcularIMC);

    function calcularIMC() { 
        // Ahora obtendremos los valores del peso y la altura
        const estatura = parseFloat(estaturaInput.value);
        const peso = parseFloat(pesoInput.value);

        // Validamos las entradas
        if (isNaN(estatura) || isNaN(peso) || estatura <= 0 || peso <= 0) {
            alert('Ingrese valores validos (valores positivos)');
            return; // si hay algun error detiene la ejecucion
        }

        // Calculamos el IMC de la persona
        const imc = peso / (estatura * estatura);

        // Mostramos el resultado
        alert(`Su indice de masa corporal (IMC) es: ${imc}`);
    }
})