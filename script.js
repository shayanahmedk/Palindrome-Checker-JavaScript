// variables for input, check button, and result
const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');

// palindrome checker arrow function
const checkPalindrome = (input) => {
    // save original input
    const originalInput = input;

    // check for empty input and then alert
    if(input === "") {
        alert("Please input a value");
        return;
    }

    // clear previous result value
    result.replaceChildren();

    // use regex to clear input from spaces/puntuation/symbols
    // and also make it into same case and join into a single string
    const lowercaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let resultMessage = `
        <strong>${originalInput}</strong>
        ${lowercaseStr === [...lowercaseStr].reverse().join('') ? 'is' : 'is not'}
        a palindrome.
    `;

    // change result
    const pElement = document.createElement('p');
    pElement.className = 'user-input';
    pElement.innerHTML = resultMessage;
    resultDiv.appendChild(pElement);

    // show results
    resultDiv.classList.remove('hidden');
};

// event listeners
checkPalindromeBtn.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
});

userInput.addEventListener(('keydown'), e => {
    if(e.key === 'Enter') {
        checkPalindrome(userInput.value);
        userInput.value = '';
    }
});

resetBtn.addEventListener('click', () => {
    userInput.value = '';
    resultDiv.replaceChildren();
    resultDiv.classList.add('hidden');
});