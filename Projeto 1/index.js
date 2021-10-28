const prompt = require("prompt-sync")();

const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

let times = [];

app.get("/", (req, res) => {    
    res.json({message: "Bem vindos ao meu primeiro projeto em BackEnd!!"});
});

app.post("/cadastrar", (req, res) => {
    const time = req.body;
    times.push(time);   
    res.json({message: "Jogo cadastrado com sucesso!!"});
});

app.get("/times", (req, res) => {    
    res.json(times);
});

app.get("/times/:id", (req, res) => {    
    const id = req.params.id;
    res.json(times[id]);
});

app.put("/times/:id", (req, res) => {
    const id = req.params.id;
    const time = times[id];
    console.log(time);
    times[id] = req.body
    res.json(times[id]);
});

app.delete("/times/:id", (req, res) => {
    const id = req.params.id;
    times.splice(id, 1);
    console.log(times[id]);  
    res.json(times[id]);
});
app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
  });