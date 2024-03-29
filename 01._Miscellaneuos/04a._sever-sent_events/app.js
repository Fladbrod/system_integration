const express = require("express");
const app = express();

app.use(express.static("."));

const quotes = [
    "Life is about making an impact, not making an income. –Kevin Kruse",
    "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",
    "Strive not to be a success, but rather to be of value. –Albert Einstein",
    "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference. –Robert Frost",
    "The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart",
    "Every strike brings me closer to the next home run. –Babe Ruth",
    "Definiteness of purpose is the starting point of all achievement. –W. Clement Stone",
    "Life isn't about getting and having, it's about giving and being. –Kevin Kruse",
    "Life is what happens to you while you’re busy making other plans. –John Lennon",
    "We become what we think about. –Earl Nightingale"
];

app.get("/quotes", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    });

    const sendQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        res.write(`data: ${quote} \n\n`);
    };

    const intervalId = setInterval(sendQuote, 5000);

    req.on("close", () => {
        clearInterval(intervalId);
    });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
