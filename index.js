const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');
require('dotenv/config');

const users = require('./routes/users');

app.use(bodyparser.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true ,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

mongoose.set('useCreateIndex', true)

app.use('/users', users); 

app.get('/', (req, res) => {
    res.send("Hello World");
}); 

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});