require('dotenv').config()

const expressFunction = require('express');
const expressApp = expressFunction();
const mongoose = require('mongoose');

const url = process.env.DATABASE_URL;
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization');
    return next();
});
expressApp.use(expressFunction.json());
expressApp.use((req, res, next) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connected to MongoDB...');
        next();
    })
    .catch(err => {
        console.log('Cannot connect to MongoDB');
        res.status(501).send('Cannot connect to MongoDB')
    });
});

expressApp.use('/products', require('./routes/products'))
expressApp.use('/productTypes', require('./routes/productTypes'))

expressApp.listen(3000, function() {
    console.log('Server Started')
});