
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

const items = qsa("li.item");

console.log(`Numbers of categories: ${items.length}`);
    [...items].forEach((item) => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`);
  });







// ----------------------------------------II SPOSÓB----------------------------------------------
// let selectedLists = document.querySelectorAll(".item");
// let selectedArray = [...selectedLists];
// let categories = selectedArray.map(category => category.querySelector(".item h2").textContent);
// console.log(`Number of categories: ${categories.length}`);

// let categoryElements = selectedArray.map(n => n.querySelectorAll("ul li").length);

// categories.forEach(function (n, i){
//     console.log(`Category: ${categories[i]}`);
//     console.log(`Elements: ${categoryElements[i]}`);
//  ; 
// })