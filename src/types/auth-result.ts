export interface AuthSuccessResult {
    success: true;
    fullName: string;
    membershipNumber: number;
}

export interface AuthErrorResult {
    success: false;
    error: string;
}

export type AuthResult = AuthSuccessResult | AuthErrorResult;