const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

//Load env vars
dotenv.config({path:'./config/config.env'});

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());

const hospitals = require(`./routes/hospitals`);
// const { connect } = require('mongoose');
app.use(`/api/v1/hospitals`,hospitals);

const PORT=process.env.PORT||3000;
const server= app.listen(PORT, console.log('server running in',process.env.NODE_ENV,'mode on port',PORT));

// Handle unhandle promise rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    // close server & exit process
    server.close(()=>process.exit(1));
});

const auth = require('./routes/auth');

app.use(`/api/v1/auth`,auth);