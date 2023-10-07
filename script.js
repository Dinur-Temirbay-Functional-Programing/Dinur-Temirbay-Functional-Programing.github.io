// SUBSCRIBE
const subscribe = document.querySelector(".subscribe");
const open = document.getElementById("sub");

function openModal() {
    subscribe.style.display = "flex";
}

function closeModal() {
    subscribe.style.display = "none";
}

open.addEventListener("click", openModal);

window.addEventListener("click", function(e) {
    if (e.target === subscribe) {
        closeModal();
    }
});



// CHAT
let chatButton = document.getElementById('chatButton');
let chat = document.getElementById('chatContainer');
let close = document.getElementById('close');
let messageInput = document.querySelector(".chat_content input");
let messagesContainer = document.querySelector(".messages");


chatButton.addEventListener("click", function() {
    chat.style.right = "0"; 
});

close.addEventListener("click", function() {
    chat.style.right = "-400px";
    console.log("Клик на кнопке закрытия");
});




function addMessage() {
    let messageText = messageInput.value;
    if (messageText.trim() !== "") {
        let messageElement = document.createElement("div");
        messageElement.textContent = messageText;
        messagesContainer.appendChild(messageElement);
        messageInput.value = "";


        let xhr = new XMLHttpRequest();
        xhr.open("POST", "sendMessage.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };
        
        xhr.send("text=" + encodeURIComponent(messageText));
    }
}

messageInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addMessage();
    }
});