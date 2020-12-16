const express = require('express');
const cors = require('cors')
const route = require('./Routes/routes');

// create express app or initialized express
const app = express();

// Setup server port
const port = 3000;

// parsed requests of content-type - application/json
app.use(express.json());

// enable cors
app.use(cors());

// defined root routes
app.use('/api', route)

// globle exception handling or error handler
app.use((error, req, res, next) => {
    res.status(500).send({
        message: "Internal server error",
        error: error
    })
})

// listen for requests
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
    require('./Config/db.config')
})