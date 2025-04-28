import { Member } from "../types/member";

export interface IDBService {
    getMemberByCredentials(username: string, password: string): Promise<Member | null>;
}