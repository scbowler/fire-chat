const express = require('express');
const { resolve } = require('path');
const app = express();
const PORT = process.env.PORT = 5000;
const ENV = process.env.ENV || 'dev';

app.use(express.static(resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'dist', 'index.html'));
});

if(ENV === 'dev'){
    app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
}

exports.app = app;
