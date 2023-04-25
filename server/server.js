const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));


const dbo = require('./mongodb/conn');

app.listen(port, () => {

    dbo.connectToServer((err) => {
        if (err) console.log(err);
    })
    console.log(`Server listening at port : ${port}`);
})