const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Routes
app.use('/api/celebrities', require('./routes/celebrities'));
app.use('/api/search', require('./routes/search'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 