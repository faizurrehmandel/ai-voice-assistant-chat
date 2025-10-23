const chatBox = document.querySelector('.chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
        appendMessage('user', userMessage);
        // Call AI helper function here
        userInput.value = '';
    }
});

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
}