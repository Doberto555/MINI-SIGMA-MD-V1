const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;
const code = require('./index');

require('events').EventEmitter.defaultMaxListeners = 500;

// 🔹 Middlewares AVANT les routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 🔹 Fichiers statiques (important)
app.use(express.static(__dirname));

// 🔹 Routes API
app.use('/code', code);

// 🔹 Page de pairing
app.get('/pair', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));
});

// 🔹 Page principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

// 🔹 Fallback 404 (optionnel mais propre)
app.use((req, res) => {
    res.status(404).send('❌ Page not found');
});

app.listen(PORT, () => {
    console.log(`
🌟 Mini Sigma Server Running 🌟
👉 http://localhost:${PORT}
👉 http://localhost:${PORT}/pair
`);
});

module.exports = app;
