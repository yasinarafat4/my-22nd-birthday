const textElement = document.getElementById('birthday-text');
const confettiContainer = document.getElementById('confetti');

const birthdayMessage = "It's My 22nd Birthday Today!";
let charIndex = 0;

function type() {
  textElement.textContent += birthdayMessage[charIndex];
  charIndex++;
  if (charIndex < birthdayMessage.length) {
    setTimeout(type, 100);
  } else {
    createConfetti();
  }
}

function createConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
    confettiContainer.appendChild(confetti);
  }
}

type();