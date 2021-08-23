const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);
const textInput = qs("#validation-input");
let inputElement= qs('input[data-length="6"]');
console.log(inputElement);
let dataLength = inputElement.dataset.length;
console.log(dataLength);
let number = parseInt(dataLength);



textInput.addEventListener("blur", () => {

 textInput.value.length === number ? textInput.classList.add("valid") : textInput.classList.add("invalid"); 

});
