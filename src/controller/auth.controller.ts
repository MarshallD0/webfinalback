import { IDBService } from "../db/IDBService";
import { AuthResult, AuthSuccessResult, AuthErrorResult } from "../types/auth-result";

export class AuthController {
    private dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async authenticate(username: string, password: string): Promise<AuthResult> {
        try {
            const member = await this.dbService.getMemberByCredentials(username, password);
            
            if (!member) {
                return {
                    success: false,
                    error: "Credenciales inválidas. Por favor verifica tu usuario y contraseña."
                } as AuthErrorResult;
            }

            return {
                success: true,
                fullName: member.fullName,
                membershipNumber: member.membershipNumber
            } as AuthSuccessResult;
        } catch (error) {
            return {
                success: false,
                error: "Error en el servidor. Por favor intenta más tarde."
            } as AuthErrorResult;
        }
    }
}