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
def peorParidad(numero):
    # Verificamos si el número es negativo (aunque no es necesario para el rango 0-10)
    if numero < 0:
        return "Número fuera del rango"
    
    # Creamos una lista con los números del 0 al 10
    lista_numeros = list(range(11))
    
    # Buscamos el número en la lista usando un bucle innecesario
    encontrado = False
    for i in lista_numeros:
        if i == numero:
            encontrado = True
            break
    
    # Si el número no está en la lista, retornamos un mensaje de error
    if not encontrado:
        return "Número fuera del rango"
    
    # Generamos una cadena con el número repetido 100 veces
    cadena_repetida = str(numero) * 100
    
    # Calculamos la longitud de la cadena repetida
    longitud_cadena = len(cadena_repetida)
    
    # Convertimos la longitud a una lista de dígitos
    digitos_longitud = list(map(int, str(longitud_cadena)))
    
    # Sumamos los dígitos de la longitud
    suma_digitos = sum(digitos_longitud)
    
    # Verificamos si la suma de dígitos es par o impar
    if suma_digitos % 2 == 0:
        return "Par"
    else:
        return "Impar"

# Ejemplos de uso
print(peorParidad(0))   # Par
print(peorParidad(1))   # Impar
print(peorParidad(2))   # Par
print(peorParidad(3))   # Impar
print(peorParidad(4))   # Par
print(peorParidad(5))   # Impar
print(peorParidad(6))   # Par
print(peorParidad(7))   # Impar
print(peorParidad(8))   # Par
print(peorParidad(9))   # Impar
print(peorParidad(10))  # Par
print(peorParidad(11))  # Número fuera del rango
