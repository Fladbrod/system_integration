// console.log(new Date());

// console.log(Date());

// // prints seconds since 1970
// console.log(Date.now());

// // ISO 8601 format
// const date = new Date();

// // Visually clean date format
// const dansihDate = new Intl.DateTimeFormat('da-DK').format(date);
// console.log(dansihDate);

// // Visually clean date format
// const americanDate = new Intl.DateTimeFormat('en-US').format(date);
// console.log(americanDate);

import express from 'express';

const app = express();
const PORT = 8080;

//endpoint to get current date
app.get('/', async (req, res) => {
    res.send({ date: new Date() });
});

//display index.html
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
});