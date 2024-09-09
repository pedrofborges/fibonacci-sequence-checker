const form = document.getElementById('fibonacci-form');
const numberInput = document.getElementById('number-input');
const messageElement = document.getElementById('message');

function pertenceAFibonacci(numero) {
    if (numero < 0) return false;

    let a = 0, b = 1;

    while (b < numero) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return b === numero;
}

function verificarNumero(event) {
    event.preventDefault(); 

    const numero = parseInt(numberInput.value, 10);
    
    if (pertenceAFibonacci(numero)) {
        messageElement.textContent = `${numero} pertence à sequência de Fibonacci.`;
        messageElement.classList.add('success');
        messageElement.classList.remove('error');
    } else {
        messageElement.textContent = `${numero} não pertence à sequência de Fibonacci.`;
        messageElement.classList.add('error');
        messageElement.classList.remove('success');
    }
}

form.addEventListener('submit', verificarNumero);
