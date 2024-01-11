const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./Config/mongoose');
const errorHandler = require('./middlewares/ErrorMiddleware');

// dotenv configuration
dotenv.config();

//mongo connection
connectDB();

//routes path
const authRoutes = require('./routes/AuthRoute');
const OpenaiROutes  = require("./routes/OpenaiRoute")

// PORT
const port = process.env.PORT || 8080  ;

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());
app.use(errorHandler)

// API routes
app.use('/api/v1/auth' , authRoutes);
app.use("/api/v1/openai", OpenaiROutes);

// server listen
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
