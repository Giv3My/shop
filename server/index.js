const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const router = require('./routes');
const connectDB = require('./db/connectDB');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
  credentials: true,
  allowedHeaders: ['Content-Type', 'Origin'],
  origin: [process.env.CLIENT_URL]
}));

app.use('/api', router);

const start = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();