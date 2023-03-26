const inputFontSizeEl = document.querySelector('input#font-size-control');
const spanTextEl = document.querySelector('span#text');

spanTextEl.style.fontSize = `${inputFontSizeEl.value}px`;

inputFontSizeEl.addEventListener("input", () => {
    /* console.log(inputFontSizeEl.value) */
    spanTextEl.style.fontSize = `${inputFontSizeEl.value}px`;
});