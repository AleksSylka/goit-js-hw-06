function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const spanColor = document.querySelector('.color')
const buttonColor = document.querySelector('.change-color');

buttonColor.addEventListener('click', () => {
  let colorHexIndex = getRandomHexColor();
  /* console.log(colorHexIndex); */
  bodyEl.style.backgroundColor = colorHexIndex;
  spanColor.textContent = colorHexIndex;
});