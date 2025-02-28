// Punto 1
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Ejemplo de uso
console.log(findMax([3, 17, -1, 4, -19])); // 17
 
// Punto 2
function includes(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return true;
        }
    }
    return false;
}

// Ejemplos de uso
console.log(includes([3, 17, -1, 4, -19], 2)); // false
console.log(includes([3, 17, -1, 4, -19], 4)); // true

// Punto 3
function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// Ejemplo de uso
console.log(sum([3, 17, -1, 4, -19])); // 4

// Punto 4
function missingNumbers(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    let missing = [];
    for (let i = min + 1; i < max; i++) {
        if (!includes(numbers, i)) {
            missing.push(i);
        }
    }
    return missing;
}

// Ejemplo de uso
console.log(missingNumbers([7, 2, 4, 6, 3, 9])); // [5, 8]