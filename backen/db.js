const mongoose = require('mongoose');

const url = process.env.MONGODB_URI || 'mongodb+srv://cespedesdavid966:12345678lol@cluster0.y9ipx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error al conectar MongoDB'));
db.once('open', function callback() {
    console.log("¡Conectado a MongoDB!");
});

module.exports = db;

