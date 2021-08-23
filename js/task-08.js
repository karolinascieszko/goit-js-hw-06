const qs = (selector) => document.querySelector(selector);
const form = qs(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
        console.log("Please fill in all the fields!");
      return alert("Please fill in all the fields!")
    }
    
 console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
