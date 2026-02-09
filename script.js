let messageIndex = 0;

const messages = [
  "Are you sure? 🥺",
  "Really sure?? 💔",
  "I’ll be very sad 😭",
  "This hurts my heart...",
  "Okay, last chance 😤❤️"
];

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  if (messageIndex < messages.length) {
    noButton.textContent = messages[messageIndex];
    messageIndex++;
  }

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
