// Punto 1
function convertidorTemp(celsius) {
    return (celsius * 9/5) + 32;
}

// Punto 2
function resolvedor(a, b, c, positivo = true) {
    const discriminante = Math.sqrt(b * b - 4 * a * c);
    if (positivo) {
        return (-b + discriminante) / (2 * a);
    } else {
        return (-b - discriminante) / (2 * a);
    }
}

// Punto 3
function mejorParidad(numero) {
    return numero % 2 === 0;
}

// Punto 4
function peorParidad(numero) {
    // Verificamos si el número es negativo (aunque no es necesario para el rango 0-10)
    if (numero < 0) {
        return "Número fuera del rango";
    }
    
    // Creamos una lista con los números del 0 al 10
    const lista_numeros = Array.from({length: 11}, (_, i) => i);
    
    // Buscamos el número en la lista usando un bucle innecesario
    let encontrado = false;
    for (let i of lista_numeros) {
        if (i === numero) {
            encontrado = true;
            break;
        }
    }
    
    // Si el número no está en la lista, retornamos un mensaje de error
    if (!encontrado) {
        return "Número fuera del rango";
    }
    
    // Generamos una cadena con el número repetido 100 veces
    const cadena_repetida = numero.toString().repeat(100);
    
    // Calculamos la longitud de la cadena repetida
    const longitud_cadena = cadena_repetida.length;
    
    // Convertimos la longitud a una lista de dígitos
    const digitos_longitud = Array.from(longitud_cadena.toString()).map(Number);
    
    // Sumamos los dígitos de la longitud
    const suma_digitos = digitos_longitud.reduce((acc, val) => acc + val, 0);
    
    // Verificamos si la suma de dígitos es par o impar
    if (suma_digitos % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

// Ejemplos de uso
console.log(peorParidad(0));   // Par
console.log(peorParidad(1));   // Impar
console.log(peorParidad(2));   // Par
console.log(peorParidad(3));   // Impar
console.log(peorParidad(4));   // Par
console.log(peorParidad(5));   // Impar
console.log(peorParidad(6));   // Par
console.log(peorParidad(7));   // Impar
console.log(peorParidad(8));   // Par
console.log(peorParidad(9));   // Impar
console.log(peorParidad(10));  // Par
console.log(peorParidad(11));  // Número fuera del rango