const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

app.get('/', (req, res) => {
    res.send(`<h1>Frontend Live</h1><p>Connecting to backend API at: ${API_URL}</p>`);
});

app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));

