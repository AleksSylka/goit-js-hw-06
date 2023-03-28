const symbolInput = document.querySelector("input");

/* symbolInput.addEventListener("blur", () => {
    if (symbolInput.value.length < symbolInput.dataset.length) {
        symbolInput.classList.add('invalid')
    } else {
        symbolInput.classList.remove('invalid');
        symbolInput.classList.add('valid');
    }
    
}); */
/* console.log(symbolInput.classList); */
const styleEl = document.querySelector('style');

console.log(symbolInput.value.length);
console.log(symbolInput.dataset.length);

symbolInput.addEventListener("blur", () => {
    symbolInput.classList.add('invalid');
    if (symbolInput.value.length === Number(symbolInput.dataset.length)) {
        symbolInput.classList.remove('invalid');
        symbolInput.classList.add('valid');
    }
});

