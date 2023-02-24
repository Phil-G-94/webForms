// grab relevant DOM references

const form = document.querySelector('#form1');
const email = document.querySelector('#mail');
const emailError = document.querySelector('#mail + span.error');

// add event listener on input element

email.addEventListener('input', (event) => {
  // each time the user types something into the input, 
  // we check if the form fields are valid using the .validity.valid properties.
  
  if (email.validity.valid) {
    // in case there is an error message visible, if the field 
    // is valid, we remove the error message. 

    emailError.textContent = ''; // resets msg content
    emailError.className = 'error'; // resets visual state of msg
  } else {

    // if there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', (event) => {
  // if the emailf field is valid, we let the form submit

  // if it isn't valid, we display correct error message with showError()
  // and then use event.preventDefault() to stop form from being sent by cancelling event. 
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

// defining the showError function

function showError() {
  
  if (email.validity.valueMissing) {
    // if the field is empty, display following error msg 
    emailError.textContent = 'You need to enter an email address.';

  } else if (email.validity.typeMismatch) {
    // if the field doesn't contain an email address, display following error msg;
    emailError.textContent = 'Entered value needs to be an email address.';

  } else if (email.validity.tooShort) {
    // if too short, display following msg 
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;

  }
  emailError.className = 'error active';
}