const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


dotenv.config();


const app = express();


const url = process.env.MONGODB_URL;
console.log(url);
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch(err => {
    console.error('MongoDB connection failed!', err);
  });


app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

const taskRoutes = require('./routes/tasksRoutes'); 
app.use('/tasks', taskRoutes); 



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
