/* importações */
const express = require('express');
const homeRouters = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/userRoutes');
const notFoundRoutes = require('./src/routes/notFoundRoutes');

/* variaveis */
const app = express();
const port = 3000;


app.use(homeRouters);
app.use(userRoutes);
app.use(notFoundRoutes);



/*por padrão o express recebe as requisições e dovolve como texto, mas para o dia dia precisamos trabalahs com JSON, esse comando faz com que todas as requisições e respostas do servidor seja em JSON */
app.use(express.json());


app.listen(port, () => console.log(`o servidor esta rodando na porta ${port}`))