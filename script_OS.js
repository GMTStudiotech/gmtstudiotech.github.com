const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => i.parentElement.classList.remove('active'));
        li.classList.add('active');
    });
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault(); // Corrected the missing parentheses
        searchForm.classList.toggle('show');
        searchBtnIcon.classList.toggle('bx-search');
        searchBtnIcon.classList.toggle('bx-x');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    document.body.classList.toggle('dark', this.checked);
});

function celebrateUpdate() {
    alert("Cheers! 🎉 Thanks for updating to the latest version!");

    document.body.insertAdjacentHTML('beforeend', `
        <div class="confetti">
            ${Array.from({ length: 14 }, (_, index) => `<div class="confetti-piece" style="left: ${7 + index * 7}%;"></div>`).join('')}
        </div>
    `);

    // Add confetti animation styles to the head
    const style = document.createElement('style');
    style.innerHTML = `
        .confetti-piece {
            position: absolute;
            width: 10px;
            height: 30px;
            background: #ffd300;
            top: 0;
            opacity: 0;
        }
        .confetti-piece:nth-child(1) {
            -webkit-transform: rotate(-40deg);
            animation: makeItRain 1000ms infinite ease-out;
            animation-delay: 182ms;
            animation-duration: 1116ms;
        }
        ${Array.from({ length: 13 }, (_, index) => `
            .confetti-piece:nth-child(${index + 2}) {
                -webkit-transform: rotate(${Math.random() * 360}deg);
                animation: makeItRain 1000ms infinite ease-out;
                animation-delay: ${Math.random() * 1000}ms;
                animation-duration: ${Math.random() * 1000 + 500}ms;
            }
        `).join('')}
    `;
    document.head.appendChild(style);

    // Confetti animation function
    const confettiAnimation = () => {
        const confettiPieces = document.querySelectorAll('.confetti-piece');
        confettiPieces.forEach(piece => piece.style.opacity = '1');
    };

    // Trigger the confetti animation
    confettiAnimation();
}

// Call the celebrateUpdate function when the "Celebrate" button is clicked
document.querySelector('.report').addEventListener('click', celebrateUpdate);

const chatBox = document.querySelector('.chat-box');
const openChatBtn = document.querySelector('.side-menu li:nth-child(2) a');
const closeChatBtn = document.querySelector('.chat-box .close-chat');

openChatBtn.addEventListener('click', () => {
    chatBox.style.display = 'block';
});

closeChatBtn.addEventListener('click', () => {
    chatBox.style.display = 'none';
});
const chatInput = document.querySelector('.chat-box .chat-input input');
const sendBtn = document.querySelector('.chat-box .chat-input button');
const chatMessages = document.querySelector('.chat-box .chat-messages');

openChatBtn.addEventListener('click', () => {
    chatBox.style.display = 'block';
});

closeChatBtn.addEventListener('click', () => {
    chatBox.style.display = 'none';
});

sendBtn.addEventListener('click', () => {
    sendMessage();
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText !== '') {
        appendMessage('sent', messageText);
        chatInput.value = '';

        // Simulate a simple chatbot response
        setTimeout(() => {
            const response = getChatbotResponse(messageText);
            appendMessage('received', response);
        }, 500);
    }
}

function appendMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(messageDiv);

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getChatbotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('hello')) {
        return 'Hi there! 👋';
    } else if (lowerCaseMessage.includes('how are you')) {
        return 'I am just a computer program, but thanks for asking!';
    } else if (lowerCaseMessage.includes('hi')) {
        return 'Hi~👋';
    } else if (lowerCaseMessage.includes('nothing')) {
        return 'Okay, goodbye!';
    } else if (lowerCaseMessage.includes('your name')) {
        return "I'm a chatbot, no specific name here.";
    } else if (lowerCaseMessage.includes('thank you')) {
        return 'You\'re welcome! 😊';
    } else if (lowerCaseMessage.includes('help')) {
        return 'I can assist you with general queries. Feel free to ask!';
    } else {
        return 'I did not understand that. Can you please clarify or ask something else?';
    }
}

    
