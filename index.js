const express = require('express');
const port = 8000;

const app = express();



app.get('/', function (request, response) { 
    response.send('<h1>Cool, it is running! or is it?</h1>');
});


app.listen(port, function (err) {
    if (err)
        console.log('Error in running the server', err);
    
    console.log('Yup! My Express Server is running on Port:', port);
});