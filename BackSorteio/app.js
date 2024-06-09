import express from 'express';
import router from './src/routes/routesVendas.js'

const app = express();
app.use(express.json());
app.use('/', router);


const port = 3000;
app.listen(port, () =>{
    console.log('servidor rodando!')
});

