const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/deepakkart', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // we're connected!
//     console.log("We are connected bro")
// });

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    const greeting =  "Meow name is " + this.name
    console.log(greeting);
  }

const Kitten = mongoose.model('Kitten', kittySchema);

const deepakkitty = new Kitten({ name: 'deepakkitty' });
// console.log(deepakkitty.name);
// deepakkitty.speak();

deepakkitty.save(function (err, deepakkitty) {
    if (err) return console.error(err);
    deepakkitty.speak();
  });