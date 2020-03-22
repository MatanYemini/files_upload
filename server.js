const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const uploadRouter = require('./routes/api/upload');

// Define Routes
app.use('/api/files', uploadRouter);

app.listen(PORT, () => console.log('APP RUNNING'));
