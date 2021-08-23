const qs = (selector) => document.querySelector(selector);
const textInput = qs("#name-input");
const output = qs("#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  if(event.currentTarget.value.length === 0){
   output.textContent = "Anonymous";
    }
      console.log(output.textContent);
});