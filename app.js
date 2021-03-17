const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


const cadquestaoRoute = require("./routes/cadquestao");


global.__basedir = __dirname;

app.use("/cadquestao", cadquestaoRoute);



app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');


});



mongoose.connect(process.env.CONEXAO,  { useUnifiedTopology: true },{ useNewUrlParser: true }, () => console.log("Aeeee conectou"));

app.listen(2002);