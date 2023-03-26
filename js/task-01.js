const itemEl = document.querySelectorAll('li.item');
console.log("Number of categories:", itemEl.length);
let secondTitle;
let secondList;
itemEl.forEach(element => {
    secondTitle = element.querySelector('h2');
    console.log('Category:', secondTitle.textContent);
    secondList = element.querySelector('ul');
    console.log('Elements:', secondList.children.length);
}
);
