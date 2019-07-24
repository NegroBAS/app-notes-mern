const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 8000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/note', require('./routes/note.routes'));

module.exports = app;