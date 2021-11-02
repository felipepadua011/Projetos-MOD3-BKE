const prompt = require("prompt-sync")();
const express = require("express");
const router = express.Router();
const port = 3000;

let musicas = [];

router.get("/", (req, res) => {
    res.status(200).json({message: "Músicas OK!!"});
});
    
router.post("/criarmusica", (req, res) => {
    const musica = req.body;

    if (!musica.nome) {
        res.status(400).json({message: "OOPSS! Nome não foi definido!! Tente Novamente."});
        return;
    };
    if (!musica.cantor) {
        res.status(400).json({message: "OOPSS! Valor não foi definido!! Tente Novamente."});
        return;
    } 
    if (!musica.acessos) {
        res.status(400).json({message: "OOPSS! Acessos não foi definido!! Tente Novamente."});
        return;
    } 
    if (!musica.anolancamento) {
        res.status(400).json({message: "OOPSS! Ano de lançamento não foi definido!! Tente Novamente."});
        return;
    } 
    if (!musica.genero) {
        res.status(400).json({message: "OOPSS! Gênero não foi definida!! Tente Novamente."});
        return;
    } 
    if (!musica.duracao) {
        res.status(400).json({message: "OOPSS! Duração não foi definido!! Tente Novamente."});
        return;
    } 

    musicas.push(musica);  
    
    res.status(201).json({message: "Música cadastrada com sucesso!!"});
});

router.get("/listar", (req, res) => {    
    res.status(200).json(musicas);
});

router.get("/listar/:id", (req, res) => {    
    const id = req.params.id;
    res.status(200).json(musicas[id]);
});

router.get("/listarnome/:nome", (req, res) => {    
    const nome = req.params.nome;
    const index = musicas.findIndex((item) => item.nome === nome);;
    if (index == -1) {
        res.status(204);
        return; 
    }
    res.status(200).json({index: index});
});

router.put("/editar/:id", (req, res) => {
    const id = req.params.id;
    const musica = musicas[id];
    console.log(musica);
    musicas[id] = req.body
    res.status(200).json({message: "Música editada com sucesso!!"});
});

router.delete("/deletar/:id", (req, res) => {
    const id = req.params.id;
    musicas.splice(id, 1);
    console.log(musicas[id]);  
    res.status(200).json({message: "Música deletada com sucesso!!"});
});

module.exports = router;