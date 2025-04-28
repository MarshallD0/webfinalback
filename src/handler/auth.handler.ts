import { Request, Response } from 'express';
import { AuthController } from '../controller/auth.controller';
import { AuthResult } from '../types/auth-result';

export class AuthHandler {
    private authController: AuthController;

    constructor(authController: AuthController) {
        this.authController = authController;
    }

    async login(request: Request, response: Response): Promise<void> {
        try {
            const { username, password } = request.body;
            
            if (!username || !password) {
                response.status(400).json({
                    success: false,
                    error: "Usuario y contraseña son requeridos"
                });
                return;
            }

            const result = await this.authController.authenticate(username, password);
            
            if (result.success) {
                response.json(result);
            } else {
                response.status(401).json(result);
            }
        } catch (error) {
            response.status(500).json({
                success: false,
                error: "Error interno del servidor"
            });
        }
    }
}