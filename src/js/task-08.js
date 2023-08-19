const form = document.querySelector(".login-form");
// const email = document.querySelector('input[type=email]').value;
// const password = document.querySelector('input[type=password]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    email: { value: email },
    password: { value: password}
  } = event.currentTarget.elements;

  if (!email || !password) {
    return alert("Please fill in all the fields!");
  }

  console.log("Email: " + email + " Password: " + password);
  event.currentTarget.reset();
}

  /*
- Form submission (form.login-form) must be processed on the submit event.
- The page must not reload when the form is submitted.
- If the form has empty fields, display alert saying that all fields must be filled in.
- As soon as the user has filled in all the fields and submitted the form, collect the field values into an object, 
where the field name will be the property name and the field value will be the property value. 
Use the elements property to access form elements.
- Display the object with the entered data in the console and clear the values of the form fields using the reset method.
  */