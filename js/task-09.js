function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const qs = selector => document.querySelector(selector);
const button = qs('.change-color');
let text = qs('.color');
console.log(text);
console.log(button);
button.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  text.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});
