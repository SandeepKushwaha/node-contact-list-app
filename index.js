const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (request, response) { 
    console.log(__dirname);
    // response.send('<h1>Cool, it is running! or is it?</h1>');
    return response.render('index', {title: "Contact List App"});
});


app.listen(port, function (err) {
    if (err)
        console.log('Error in running the server', err);
    
    console.log('Yup! My Express Server is running on Port:', port);
});