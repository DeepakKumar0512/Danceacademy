const express = require("express");
const path = require("path");
// const fs = require("fs");
const app = express();
// const mongoose = require('mongoose');
const bodyparser = require("body-parser");

// mongoose.connect('mongodb://localhost:27017/contactdance', { useNewUrlParser: true, useUnifiedTopology: true });
const port = 8000;

// var contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     city: String
// });
// var Contact = mongoose.model('Contact', contactSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/home', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params)
});
app.get('/about', (req, res) => {
    const params = {}
    res.status(200).render('about.pug', params)
});
app.get('/services', (req, res) => {
    const params = {}
    res.status(200).render('services.pug', params)
});

app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
});

app.post('/contact', (req, res)=>{
    // var myData = new Contact(req.body);
    // myData.save().then(()=>{
    //         res.send("This item has been saved to the database")
    //     }).catch(()=>{
    //         res.status(400).send("Item was not saved to the database")
    //     });
    res.status(200).render('contact.pug');
});

app.listen(port, ()=>{
    console.log(`The application started on port ${port}`)
});