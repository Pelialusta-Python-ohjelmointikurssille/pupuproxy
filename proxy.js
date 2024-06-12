const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

// Handle both GET and POST requests
app.all('/api/*', (req, res) => {
    const apiUrl = 'https://tie.koodariksi.fi' + req.originalUrl; 
    request({
        method: req.method, // Use the same HTTP method as the incoming request
        url: apiUrl,
        form: req.method === 'POST' ? req.body : undefined, // Include form data for POST requests only
        qs: req.method === 'GET' ? req.query : undefined // Include query parameters for GET requests only
    }, (error, response, body) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(response.statusCode).send(body);
        }
    });
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
