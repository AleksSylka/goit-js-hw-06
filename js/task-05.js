const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

const printName = () => {
    nameInput.value !== '' ? nameOutput.innerHTML = nameInput.value : nameOutput.innerHTML = 'Anonymous';
/*     if (nameInput.value !== '') {
        nameOutput.innerHTML = nameInput.value;
    } else {
        nameOutput.innerHTML = 'Anonymous';
    } */
};

nameInput.addEventListener('input', printName);
console.log(nameInput.textContent);