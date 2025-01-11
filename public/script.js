document.getElementById('chat-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  const userInput = document.getElementById('user-input').value; // Get the user's input
  const chatOutput = document.getElementById('chat-output'); // Get the chat output container

  if (userInput.trim()) {
    // Create and display the user's message
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = `You: ${userInput}`;
    chatOutput.appendChild(userMessage);

    // Create and display the bot's response
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-response');
    botMessage.textContent = 'Bot: I am here to help!';
    chatOutput.appendChild(botMessage);

    // Clear the input field after sending the message
    document.getElementById('user-input').value = '';
  }
});
