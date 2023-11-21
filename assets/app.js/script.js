// navbar
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});


// form validation
const contactForm = document.getElementById('contact-form');
const hireForm = document.getElementById('hire-form');

const validateForm = (form) => {
  const nameInput = form.querySelector('input[name="contact-name"]');
  const emailInput = form.querySelector('input[name="contact-email"]');
  const messageInput = form.querySelector('textarea[name="contact-message"]');

  if (!nameInput.value.trim()) {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }

  if (!emailInput.value.trim()) {
    alert('Please enter your email address.');
    emailInput.focus();
    return false;
  }

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return false;
  }

  if (!messageInput.value.trim()) {
    alert('Please enter your message.');
    messageInput.focus();
    return false;
  }

  return true;
};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!validateForm(contactForm)) {
    return;
  }

  // Submit the form using AJAX or other methods
  alert('Your message has been sent!');
});

hireForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!validateForm(hireForm)) {
    return;
  }

  // Submit the form using AJAX or other methods
  alert('Your proposal has been submitted!');
});

// typing text
const headingElement = document.querySelector('h1');
const typingText = 'Hi, I am Felix Adewale';

let textIndex = 0;

const typeText = () => {
  if (textIndex < typingText.length) {
    headingElement.textContent += typingText[textIndex++];
    setTimeout(typeText, 100); // Adjust the speed by changing the delay
  }
};

typeText();

