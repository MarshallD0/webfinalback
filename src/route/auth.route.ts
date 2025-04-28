import { Router } from 'express';
import { AuthHandler } from '../handler/auth.handler';
import { IDBService } from '../db/IDBService';

export default function authRouter(dbService: IDBService) {
    const router = Router();
    const authHandler = new AuthHandler(dbService);

    router.post('/login', authHandler.login.bind(authHandler));

    return router;
}