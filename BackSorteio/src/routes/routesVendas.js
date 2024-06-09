import express from 'express';
import { getVendas } from '../controller/controllerVendas.js';

const router = express.Router();

router.get('/get', getVendas );

export default router;