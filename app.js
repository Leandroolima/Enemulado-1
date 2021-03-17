const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express() ;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const alunoRoute = require("./routes/aluno");
//const notaRoute = require("./routes/nota");

global.__basedir = __dirname;
// middleware
app.use("/aluno", alunoRoute);
//app.use("/nota", notaRoute);


app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
});


mongoose.connect(process.env.CONEXAO, { useNewUrlParser: true }, () => console.log("Aeeee conectou"));

app.listen(2000);
