const express = require('express');
const path = require('path');
const app = express();

const port= process.env.PORT ||3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./src/views/home.html"));
});

app.use(express.static("public"));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "./src/views/login.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "./src/views/register.html"));
});