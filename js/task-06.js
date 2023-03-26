const symbolInput = document.querySelector("input");

symbolInput.addEventListener("blur", () => {
    if (symbolInput.value.length < symbolInput.dataset.length) {
        symbolInput.classList.add('invalid')
    } else {
        symbolInput.classList.remove('invalid');
        symbolInput.classList.add('valid');
    }
    
});
/* console.log(symbolInput.classList); */
const styleEl = document.querySelector('style');