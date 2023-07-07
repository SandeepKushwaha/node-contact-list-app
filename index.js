const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
})); // adding middleware parser provided by express

// accessing static files
app.use(express.static('assets'));

app.use(function (request, response, next) {
    request.MyCustomProperty = 'Middleware is here.';
    console.log('middleware 1: called.');
    next(); // next() called the next middleware.
});

app.use(function (request, response, next) {
    console.log('middleware 2: called.');
    console.log('custom property:', request.MyCustomProperty);
    next();
});

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
    // console.log(request);
    console.log("Inside the '/' router customProperty:", request.MyCustomProperty);
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
    // return response.redirect('/practice');
    // console.log(request);
    console.log(request.body);
    console.log("Name:", request.body.name);
    console.log("Phone:", request.body.phone);

    // appending the details to contact
    // contactList.push({
    //     name: request.body.name,
    //     phone: request.body.phone
    // });

    contactList.push(request.body);

    // return response.redirect('/');
    return response.redirect('back'); // if you don't remember the url
});

app.listen(port, function (err) {
    if (err)
        console.log('Error in running the server', err);

    console.log('Yup! My Express Server is running on Port:', port);
});