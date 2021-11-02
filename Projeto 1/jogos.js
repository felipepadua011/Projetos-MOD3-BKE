const prompt = require("prompt-sync")();
const express = require("express");
const router = express.Router();
const port = 3000;

let jogos = [];

router.get("/", (req, res) => {
    res.status(200).json({message: "Jogos OK!!"});
});
    
router.post("/criarjogo", (req, res) => {
    const jogo = req.body;

    if (!jogo.nome) {
        res.status(400).json({message: "OOPSS! Nome não foi definido!! Tente Novamente."});
        return;
    };
    if (!jogo.valor) {
        res.status(400).json({message: "OOPSS! Valor não foi definido!! Tente Novamente."});
        return;
    } 
    if (!jogo.criador) {
        res.status(400).json({message: "OOPSS! Criador não foi definido!! Tente Novamente."});
        return;
    } 
    if (!jogo.anolancamento) {
        res.status(400).json({message: "OOPSS! Ano de lançamento não foi definido!! Tente Novamente."});
        return;
    } 
    if (!jogo.genero) {
        res.status(400).json({message: "OOPSS! Gênero não foi definida!! Tente Novamente."});
        return;
    } 
    if (!jogo.downloads) {
        res.status(400).json({message: "OOPSS! Downloads não foi definido!! Tente Novamente."});
        return;
    } 

    jogos.push(jogo);  
    
    res.status(201).json({message: "Jogo cadastrado com sucesso!!"});
});

router.get("/listar", (req, res) => {    
    res.status(200).json(jogos);
});

router.get("/listar/:id", (req, res) => {    
    const id = req.params.id;
    res.status(200).json(jogos[id]);
});

router.get("/listarnome/:nome", (req, res) => {    
    const nome = req.params.nome;
    const index = jogos.findIndex((item) => item.nome === nome);;
    if (index == -1) {
        res.status(204);
        return; 
    }
    res.status(200).json({index: index});
});

router.put("/editar/:id", (req, res) => {
    const id = req.params.id;
    const jogo = jogos[id];
    console.log(jogo);
    jogos[id] = req.body
    res.status(200).json({message: "Jogo editado com sucesso!!"});
});

router.delete("/deletar/:id", (req, res) => {
    const id = req.params.id;
    jogos.splice(id, 1);
    console.log(jogos[id]);  
    res.status(200).json({message: "Jogo deletado com sucesso!!"});
});

module.exports = router;