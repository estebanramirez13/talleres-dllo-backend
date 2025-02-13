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
    if (numero === 1) return false;
    if (numero === 2) return true;
    if (numero === 3) return false;
    if (numero === 4) return true;
    if (numero === 5) return false;
    if (numero === 6) return true;
    if (numero === 7) return false;
    if (numero === 8) return true;
    if (numero === 9) return false;
    if (numero === 10) return true;
    return null; // Para números fuera del rango 1-10
}