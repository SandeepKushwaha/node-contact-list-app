const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let contactList = [
    {
        name: "Amit",
        phone: "1234567890"
    },
    {
        name: "Ram",
        phone: "2345678901"
    },
    {
        name: "Shyam",
        phone: "3456789012"
    },
    {
        name: "John",
        phone: "4567890123"
    },
    {
        name: "Tony Stark",
        phone: "5678901234"
    }
];


app.get('/', function (request, response) {
    console.log(__dirname);
    // response.send('<h1>Cool, it is running! or is it?</h1>');
    return response.render('index', {
        title: "Contact List App",
        contact_list: contactList
    });
});

// creating the request for 'practice.ejs' file
app.get('/practice', function (request, response) {
    return response.render('practice', {
        title: "Practice EJS Playground"
    });
});

app.post('/create-contact', function (request, response) { 
    return response.redirect('/practice');
});

app.listen(port, function (err) {
    if (err)
        console.log('Error in running the server', err);

    console.log('Yup! My Express Server is running on Port:', port);
});