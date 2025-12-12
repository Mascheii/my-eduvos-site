// Chatbot Functions

function toggleChatbot(){
  const container = document.querySelector('.chatbot-container');
  container.classList.toggle('active');
}

function closeChatbot(){
  const container = document.querySelector('.chatbot-container');
  container.classList.remove('active');
}

function sendMessage(){
  const input = document.getElementById('chatbotInput');
  const messagesDiv = document.getElementById('chatbotMessages');
  
  if(input.value.trim() === '') return;
  
  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'chatbot-msg user-msg';
  userMsg.innerHTML = '<p>' + input.value + '</p>';
  messagesDiv.appendChild(userMsg);
  
  // Add bot response
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'chatbot-msg bot-msg';
    botMsg.innerHTML = '<p>Thanks for your message! Our team will respond shortly.</p>';
    messagesDiv.appendChild(botMsg);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 500);
  
  input.value = '';
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Allow sending message with Enter key
document.addEventListener('DOMContentLoaded', function(){
  const chatbotInput = document.getElementById('chatbotInput');
  if(chatbotInput){
    chatbotInput.addEventListener('keypress', function(e){
      if(e.key === 'Enter') sendMessage();
    });
  }
});
