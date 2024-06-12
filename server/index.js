const express = require('express');
const cors = require('cors'); 
const dateRoutes = require('./routes/dateRoutes');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', dateRoutes);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
