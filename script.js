const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const typingIndicator = document.getElementById('typing-indicator');

// Function to add a message
function addMessage(text, type) {
    const message = document.createElement('div');
    message.classList.add('message', type);
    message.textContent = text;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Simulate typing animation
function showTypingIndicator() {
    typingIndicator.style.display = 'block';
    setTimeout(() => {
        typingIndicator.style.display = 'none';
    }, 1500); // Typing animation duration
}

// Handle send button click
sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, 'sender'); // Add sender message
    userInput.value = '';

    // Simulate receiver reply with delay
    showTypingIndicator();
    setTimeout(() => {
        addMessage('This is a reply!', 'receiver'); // Receiver message
    }, 2000);
});