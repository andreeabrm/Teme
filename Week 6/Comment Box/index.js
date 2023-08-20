document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  const nameInputElement = document.getElementById('name');
  const emailInputElement = document.getElementById('email');
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const messageInputElement = document.getElementById('message');
  const submitBtn = document.getElementById('submit-btn');
  const userNameElement = document.getElementById('user-name');
  const confirmationBanner = document.getElementById('confirmation-banner');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateForm()) {
      const firstName = nameInputElement.value.trim().split(' ')[0];
      console.log('Name:', nameInputElement.value);
      console.log('Email:', emailInputElement.value);
      console.log('Gender:', getSelectedGender());
      console.log('Message:', messageInputElement.value);
      showConfirmationBanner(firstName);
      resetForm();
    }
  });

  function validateForm() {
    let isValid = true;

    if (nameInputElement.value.trim() === '') {
      isValid = false;
      markInvalidField(nameInputElement);
    } else {
      markValidField(nameInputElement);
    }

    if (emailInputElement.value.trim() === '') {
      isValid = false;
      markInvalidField(emailInputElement);
    } else {
      markValidField(emailInputElement);
    }

    if (!getSelectedGender()) {
      isValid = false;
      markInvalidField(genderInputs[0]);
    } else {
      markValidField(genderInputs[0]);
    }

    if (messageInputElement.value.trim() === '') {
      isValid = false;
      markInvalidField(messageInputElement);
    } else {
      markValidField(messageInputElement);
    }

    return isValid;
  }

  function getSelectedGender() {
    for (const genderInput of genderInputs) {
      if (genderInput.checked) {
        return genderInput.value;
      }
    }
    return null;
  }

  function markInvalidField(field) {
    field.style.border = '2px solid red';
  }

  function markValidField(field) {
    field.style.border = '1px solid #ccc';
  }
});

  const form = document.querySelector('.contact-form');
  const submitButton = form.querySelector('#submit-btn');
  const confirmationBanner = document.getElementById('confirmation-banner');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  confirmationBanner.classList.remove('hidden');

  form.reset();

  setTimeout(function() {
    confirmationBanner.classList.add('hidden');
  }, 3000);
});