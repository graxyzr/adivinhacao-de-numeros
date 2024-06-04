let guessInput = document.getElementById('guessInput');
let guessBtn = document.getElementById('guessBtn');
let resultMessage = document.getElementById('resultMessage');
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

guessBtn.addEventListener('click', () => {
    let userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Por favor, insira um número válido entre 1 e 100.';
        resultMessage.style.color = 'red';
        return;
    }

    guesses++;

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Parabéns! Você adivinhou o número ${randomNumber} em ${guesses} tentativas.`;
        resultMessage.style.color = 'green';
        guessBtn.disabled = true;
        guessInput.disabled = true;
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Seu palpite é muito baixo. Tente novamente!';
        resultMessage.style.color = 'orange';
    } else {
        resultMessage.textContent = 'Seu palpite é muito alto. Tente novamente!';
        resultMessage.style.color = 'orange';
    }

    guessInput.value = '';
    guessInput.focus();
});