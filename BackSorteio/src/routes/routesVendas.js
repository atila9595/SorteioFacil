import express from 'express';
import { getVenda, getVendas, addComprador, editCompradorTosheet } from '../controller/controllerVendas.js';

const router = express.Router();

router.get('/getrows', getVendas );
router.get('/getrow/:id', getVenda );
router.post('/addvendas', addComprador);
router.post('/editvendas', editCompradorTosheet);

export default router;