const buttonDown = document.querySelector('[data-action="decrement"]');
const buttonUp = document.querySelector('[data-action="increment"]');
const spanResualt = document.querySelector('span#value');
/* let counterValue = Number(document.querySelector('span#value').textContent); */
let counterValue = 0;

const counterUp = () => {
    counterValue += 1;
    console.log(counterValue);
    spanResualt.innerHTML = `${counterValue}`;
};

const counterDown = () => {
    counterValue -= 1;
    console.log(counterValue);
    spanResualt.innerHTML = `${counterValue}`;
};

buttonUp.addEventListener('click', counterUp);
buttonDown.addEventListener('click', counterDown);