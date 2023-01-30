const express = require("express");
const path = require("path");
// const fs = require("fs");
const bodyparser = require("body-parser");
const app = express();
// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);
// mongoose.connect('mongodb://127.0.0.1:27017/contactgym');
const port = 80;

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost/contactgym');
// }


// mongodb specific
// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phonenumber: String,
//   address: String,
//   concern: String
// });

// const contact = mongoose.model('contact', contactSchema);

//serving static files
app.use(express.static('static'));
app.use(express.urlencoded({extended:false}));


// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/static/index.html'));
  });

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '/static/contact.html'));
  });


app.post('/contact', (req, res)=>{
  var mydata= new contact(req.body);
  mydata.save().then(()=>{
    res.send("this item has been saved to the database");
  }).catch(()=>{
    res.status(400).send("the item has not been saved to the database");
  })  

});


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
