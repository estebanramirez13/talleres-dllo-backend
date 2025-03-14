//Punto 1
function desglosarString(cadena, tipo) {
    const vocales = 'aeiouAEIOU';
    let contador = 0;

    for (let char of cadena) {
        if (tipo === 'vocales' && vocales.includes(char)) {
            contador++;
        } else if (tipo === 'consonantes' && !vocales.includes(char) && /[a-zA-Z]/.test(char)) {
            contador++;
        }
    }

    return contador;
}

// Ejemplos de uso
console.log(desglosarString("murcielagos", "vocales")); // Salida: 5
console.log(desglosarString("murcielagos", "consonantes")); // Salida: 6

//Punto 2
function twoSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(currentNum, i);
    }

    return null; // En caso de que no se encuentren dos números que sumen el objetivo
}

// Ejemplos de uso
console.log(twoSum([2, 7, 11, 15], 9)); // Salida: [0, 1]
console.log(twoSum([3, 4, 2], 6)); // Salida: [1, 2]

//Punto 3
function conversionRomana(romano) {
    const valores = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
    let total = 0;
    let prev = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
        const current = valores[romano[i]];
        if (current >= prev) {
            total += current;
        } else {
            total -= current;
        }
        prev = current;
    }

    return total;
}

// Ejemplos de uso
console.log(conversionRomana("II")); // Salida: 2
console.log(conversionRomana("XIV")); // Salida: 14
console.log(conversionRomana("MMXXIV")); // Salida: 2024
console.log(conversionRomana("MXMVII")); // Salida: 1997


