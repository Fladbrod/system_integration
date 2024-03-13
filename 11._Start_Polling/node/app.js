import express from 'express';

const app = express();

const PORT = 8080;

app.use(express.static('public'));

const randomNumbers = [1, 2, 3, 4];

app.get('/randomNumbers', async (req, res) => {
    res.send({ data: randomNumbers });
});

app.post('simulateRandomNumber', async (req, res) => {
    const randomNumber = getRandomInt(3, 1001);
    randomNumbers.push(randomNumber);
    res.send({ data: randomNumber });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.listen(PORT, () => {
    console.log('Server is running on port: ', 8080);
});