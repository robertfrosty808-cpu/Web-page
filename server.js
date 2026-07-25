const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/api/message", (req, res) => {
    res.json({
        lines: [
            "Hey...",
            "May your birthday mark the beginning of a year filled with endless happiness, unforgettable memories, and all the dreams your heart wishes to achieve. Happy Birthday! 🎂✨"
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
