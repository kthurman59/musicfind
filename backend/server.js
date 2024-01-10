const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const PORT  = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

//  Connect to SQLite DB
const db = new sqlite3.Database('music.db');

//  Example API endpoint to fetch bands
app.get('/api/bands', (req, res) => {
    db.all('SELECT * FROM Bands', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

//  Example API endpont to fethc song for a band
app.get('/api/songs/:bandId', (req, res) => {
    const { bandId } = req.params;
    db.all('SELECT * FROM Songs WHERE bandId = ?', [bandId], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

//  Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});