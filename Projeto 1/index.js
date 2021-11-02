const prompt = require("prompt-sync")();
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

let times = [];
let jogos = [];
let musicas = [];

app.get("/", (req, res) => {    
    res.json({message: "Bem vindos ao meu primeiro projeto em BackEnd!!"});
});

const timesRouter = require("./times");
app.use("/times", timesRouter);  

const jogosRouter = require("./jogos");
app.use("/jogos", jogosRouter); 

const musicasRouter = require("./musicas");
app.use("/musicas", musicasRouter); 

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});