const prompt = require("prompt-sync")();
const express = require("express");
const router = express.Router();
const port = 3000;

let times = [];

router.get("/", (req, res) => {
    res.status(200).json({message: "Times OK!!"});
});
    
router.post("/cadastrar", (req, res) => {
    const time = req.body;

    if (!time.nome) {
        res.status(400).json({message: "OOPSS! Nome não foi definido!! Tente Novamente."});
        return;
    };
    if (!time.tecnico) {
        res.status(400).json({message: "OOPSS! Técnico não foi definido!! Tente Novamente."});
        return;
    } 
    if (!time.titulos) {
        res.status(400).json({message: "OOPSS! Títulos não foi definido!! Tente Novamente."});
        return;
    } 
    if (!time.jogadores) {
        res.status(400).json({message: "OOPSS! Jogadores não foi definido!! Tente Novamente."});
        return;
    } 
    if (!time.torcida) {
        res.status(400).json({message: "OOPSS! Torcida não foi definida!! Tente Novamente."});
        return;
    } 
    if (!time.estadio) {
        res.status(400).json({message: "OOPSS! Estádio não foi definido!! Tente Novamente."});
        return;
    } 

    times.push(time);  
    
    res.status(201).json({message: "Jogo cadastrado com sucesso!!"});
});

router.get("/listar", (req, res) => {    
    res.status(200).json(times);
});

router.get("/listar/:id", (req, res) => {    
    const id = req.params.id;
    res.status(200).json(times[id]);
});

router.get("/listarnome/:nome", (req, res) => {    
    const nome = req.params.nome;
    const index = times.findIndex((item) => item.nome === nome);;
    if (index == -1) {
        res.status(204);
        return; 
    }
    res.status(200).json({index: index});
});

router.put("/listar/:id", (req, res) => {
    const id = req.params.id;
    const time = times[id];
    console.log(time);
    times[id] = req.body
    res.status(200).json(times[id]);
});

router.delete("/listar/:id", (req, res) => {
    const id = req.params.id;
    times.splice(id, 1);
    console.log(times[id]);  
    res.status(200).json(times[id]);
});

module.exports = router;