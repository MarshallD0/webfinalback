import { Request, Response } from 'express';
import { AuthController } from '../controller/auth.controller';
import { IDBService } from '../db/IDBService';

export class AuthHandler {
    private controller: AuthController;

    constructor(dbService: IDBService) {
        this.controller = new AuthController(dbService);
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;
            const result = await this.controller.authenticate(username, password);
            
            if (result.success) {
                res.json(result);
            } else {
                res.status(401).json(result);
            }
        } catch (error) {
            res.status(500).json({ 
                success: false, 
                error: 'Error en el servidor' 
            });
        }
    }
}