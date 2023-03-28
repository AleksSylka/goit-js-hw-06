const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulGalleryEl = document.querySelector('ul.gallery');
/* console.dir(ulGalleryEl); */

/* images.forEach(element => {
  const { url, alt } = element;
  
  
  
  let itemGalleryEl = document.createElement('li');
  itemGalleryEl.classList.add('item');
  ulGalleryEl.append(itemGalleryEl);
  let imgGalleryEl = document.createElement('img');
  itemGalleryEl.append(imgGalleryEl);
  imgGalleryEl.src = url;
  imgGalleryEl.alt = alt;
}); */
/* console.dir(ulGalleryEl);
console.log(ulGalleryEl); */

let arrayImg = [];
arrayImg = images.map(({ url, alt }) => `<li class="item">
  <img class="img-item" src=${url} alt=${alt}>
  </li>`).join("");
console.log(arrayImg);
ulGalleryEl.insertAdjacentHTML("beforeend", arrayImg);