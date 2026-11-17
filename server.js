
const content = document.getElementById("content");

const lines = [
    "Hey...",
    "May your birthday mark the beginning of a year filled with endless happiness, unforgettable memories, and all the dreams your heart wishes to achieve. Happy Birthday! 🎂✨"
];

let index = 0;

function showMessage() {
    if (index < lines.length) {
        const message = document.createElement("p");
        message.textContent = lines[index];
        content.appendChild(message);

        index++;
    }
}

// Display messages one by one
function startMessage() {
    showMessage();

    const interval = setInterval(() => {
        showMessage();

        if (index >= lines.length) {
            clearInterval(interval);
        }
    }, 2000);
}

startMessage();
