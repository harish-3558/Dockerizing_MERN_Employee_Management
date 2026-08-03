const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const employeeRouter = require('./router/emprouter');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 5000;




mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB succesfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.use('/employees', employeeRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});