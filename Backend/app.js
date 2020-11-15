const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes);

// handle errors
app.use((err, req, res, next) => {
    if(err.status === 404){
        res.status(404).json({message: 'Resource not found.'})
    } else {
        res.status(500).json({message: 'Error processing submitted data.', error: err.message})
    }
})

module.exports = app;