//Estudantes: Gabriely Oliveira Eustáquio, Leonardo Oliveira de Paula
// importação da biblioteca Express
const express = require('express')

// instalação: npm install body-parser
const bodyParser = require('body-parser');

// criação de um app Express
const app = express();

// configurar o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/img', express.static('./img'));

//módulo para abrir arquivos
const fs = require('fs');

// importação das rotas
const veiculoRotas = require('./routes/Veiculo');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 8080;

app.get('/', (req, res) => {

  const arquivoHtml = fs.readFileSync('./pages/index.html');
   // responde com o arquivo html
   res.status(200).end(arquivoHtml);
})

// utilizar as rotas
app.use('/veiculo', veiculoRotas);


// rodar a aplicação
app.listen(port, hostname, console.log('Servidor rodando...'));