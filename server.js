const express = require('express');
const app = express();
const PORT = 8000;
const uploadRouter = require('./routes/api/upload');
const cors = require('cors');

app.get('/', (req, res) => res.send('API RUNNING'));
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Define Routes
app.use('/api/files', uploadRouter);

app.listen(PORT, () => console.log('APP RUNNING'));
