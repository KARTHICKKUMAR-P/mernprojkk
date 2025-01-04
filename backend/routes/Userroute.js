import express from 'express';
import {fetch,create,update,check} from '../controller/Usercontroller.js';
const router = express.Router();
router.get('/fetch', fetch);
router.post('/create', create);
router.put('/update/:id', update);
router.get('/check/:id',check);

export default router;