const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes= require('./routes/postRoutes')
const bodyParser = require('body-parser');

require('dotenv').config();

const PORT =  process.env.PORT || 5000;



const app = express()


//middleware 
app.use(cors())
app.use(bodyParser.json())


// Routes

app.use('/api/postRoutes',postRoutes);


//database connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection failed:', error));


//  Connect

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
