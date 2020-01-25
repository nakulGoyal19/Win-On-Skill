const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://winonskill:winonskill@cluster0-kvgna.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: false
})

var db = mongoose.connection

db.on('error', function () {
    console.log("Error connecting to db")
})

db.once('open', function () {
    console.log("Connected to db")
})