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

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);


const list = qs(".gallery");
const galleryItems = images
.map((item) => `<li class="item-img"><img class = "photo" src = ${item.url} alt = ${item.alt} width = "1800px"  </li>`)
.join("");

console.log(galleryItems);

list.insertAdjacentHTML("afterbegin", galleryItems);

// FLEXBOX

const newGallery = qs(".gallery");
newGallery.style.listStyle = "none";
newGallery.style.display = "flex";
newGallery.style.flexDirection = "column";
newGallery.style.justifyContent = "center";
newGallery.style.alignItems = "center";

const newGalleryPhoto = qsa(".gallery .item-img .photo");
const firstItem = newGalleryPhoto[0];
firstItem.style.marginBottom = "30px";
const secondItem = newGalleryPhoto[1];
secondItem.style.marginBottom = "30px";
