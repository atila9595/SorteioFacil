import express from 'express';
import http from 'http';
import { WebSocketServer } from 'ws';
import router from './src/routes/routesVendas.js';
import cors from 'cors';

const app = express();

// Configuração do middleware CORS
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

// Criação do servidor HTTP e associação ao aplicativo Express
const server = http.createServer(app);

// Configuração do servidor WebSocket
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('Novo cliente conectado');

    ws.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
    });

    ws.send('Olá do servidor');
});

const port = 5000;
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

