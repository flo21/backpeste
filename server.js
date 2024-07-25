const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5008;

app.use(cors());

function loadData(fileName) {
    return JSON.parse(fs.readFileSync(fileName, 'utf-8'));
}

app.get('/diseases', (req, res) => {
    const data = loadData('./data/diseases.json');
    res.json({ diseases: data });
});

app.get('/accidents', (req, res) => {
    const data = loadData('./data/accidents.json');
    res.json({ accidents: data });
});

app.get('/punishments', (req, res) => {
    const data = loadData('./data/punishments.json');
    res.json({ punishments: data });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
