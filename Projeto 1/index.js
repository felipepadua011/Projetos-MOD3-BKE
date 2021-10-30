const prompt = require("prompt-sync")();

const express = require("express");

const app = express();


const port = 3000;

app.use(express.json());

let times = [];

app.get("/", (req, res) => {    
    res.json({message: "Bem vindos ao meu primeiro projeto em BackEnd!!"});
});

const timesRouter = require("./times");
app.use("/times", timesRouter);  

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});