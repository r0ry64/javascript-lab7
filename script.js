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
