// Mouse events
const mouseButton = document.getElementById('mouseButton');
const mouseMessage = document.getElementById('mouseMessage');

mouseButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = 'You are hovering over the button!';
});

mouseButton.addEventListener('mouseout', () => {
    mouseMessage.textContent = 'Your mouse is not hovering over the button!';
});

// Keyboard events
const keyboardInput = document.getElementById('keyboardInput');
const keyboardMessage = document.getElementById('keyboardMessage');

keyboardInput.addEventListener('keyup', (event) => {
    keyboardMessage.textContent = `You pressed: ${event.key}`;
});

// Form events
const eventForm = document.getElementById('eventForm');
const formMessage = document.getElementById('formMessage');

eventForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Form submitted successfully!';
});

// Focus and blur events
const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = 'Input field is focused :)';
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = 'You are not focused on the input field above!';
});

// Event delegation
const buttonContainer = document.getElementById('buttonContainer');
const delegationMessage = document.getElementById('delegationMessage');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        delegationMessage.textContent = `You clicked: ${event.target.textContent}`;
    }
});