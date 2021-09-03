const qs = selector => document.querySelector(selector);
const qsa = selector => document.querySelectorAll(selector);
const textInput = qs('#validation-input');
const inputElement = qs('input[data-length="6"]');
console.log(inputElement);
const dataLength = inputElement.dataset.length;
console.log(dataLength);
const inputLength = parseInt(dataLength);

textInput.addEventListener('blur', () => {
  textInput.value.length === inputLength
    ? textInput.classList.add('valid')
    : textInput.classList.add('invalid');
});

textInput.addEventListener('focus', () => {
  textInput.classList.remove('invalid');
});
