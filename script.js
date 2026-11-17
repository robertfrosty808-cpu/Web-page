
const content = document.getElementById("content");

// Birthday message
const data = {
    lines: [
        "Hey...",
        "May your birthday mark the beginning of a year filled with endless happiness, unforgettable memories, and all the dreams your heart wishes to achieve. Happy Birthday! 🎂✨"
    ]
};

function loadMessage() {
    let i = 0;

    function typeLine() {
        if (i >= data.lines.length) return;

        let line = data.lines[i];
        let p = document.createElement("p");

        content.appendChild(p);

        let j = 0;

        function typeChar() {
            if (j < line.length) {
                p.textContent += line[j];
                j++;
                setTimeout(typeChar, 50);
            } else {
                i++;
                setTimeout(typeLine, 500);
            }
        }

        typeChar();
    }

    typeLine();
}

loadMessage();

    typeLine();
}

loadMessage();
