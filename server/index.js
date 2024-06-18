const express = require('express');
const cors = require('cors');
const path = require('path');
const dateRoutes = require('./routes/dateRoutes.js');
const { downloadFile } = require('./controllers/dateCheckController.js');

const app = express();

app.use(cors());
app.use(express.json());

// Serve API routes
app.use('/api', dateRoutes);
app.use('api', downloadFile)


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));


// Handle all other routes by serving the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
