import express from 'express'

const servidor = express()
servidor.use(express.json());

const filmes = []
const jogos = []

servidor.get('/filmes', (req, res) => {
    res.send(filmes)
})

servidor.get('/jogos', (req, res) => {
    res.send(jogos)
})

servidor.post('/filmes', (req, res) => {
    filmes.push(req.body)
    res.send('o filme foi cadastrado com sucesso!')
})

servidor.post('/jogos', (req, res) => {
    jogos.push(req.body)
    res.send('o jogo foi cadastrado com sucesso!')
})

servidor.listen(3000, () => {
    console.log('deu bom!');
    
})