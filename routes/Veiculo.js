// importação das biblioetas
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();

// rota post para veiculo
rotas.post('/', (req, res) => {

     // implementação do recebimento dos dados para salvar no BD
     const veiculoPost = {
          nome: req.body.nome,
          fabricante: req.body.fabricante,
          ano: req.body.ano,
          valor: req.body.valor,
          cor: req.body.cor,
          combustivel: req.body.combustivel
     };
   
     // implementação do código para enviar para BD
     res.status(201).send({
       mensagem: 'Veículo cadastrado com sucesso.',
       dadosNovoVeiculo: veiculoPost
     });
});

rotas.put('/:idVeiculo', (req, res) => {
   // obter o id enviado pela url
   const idVeiculo = req.params.idVeiculo;
   const veiculoPut = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    ano: req.body.ano,
    valor: req.body.valor,
    cor: req.body.cor,
    combustivel: req.body.combustivel
  };

  res.status(200).send({
  mensagem: `O preço do veículo foi atualizado com sucesso! Seu id é ${idVeiculo}`,
    dadosNovoVeiculo: veiculoPut
  });
});

rotas.delete('/:idVeiculo', (req, res) => {
  // obtém o id enviado pela URL da requisição
  const idVeiculo = req.params.idVeiculo;
  //simula exclusão 
  res.status(202).send({
    mensagem: `O veículo de ID ${idVeiculo} foi excluído com sucesso!`
  });
});

// exportar o código que manipula a rota para veiculo
module.exports = rotas;