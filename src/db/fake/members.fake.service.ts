import { IDBService } from "../IDBService";
import { Member } from "../../types/member";

const FAKE_MEMBERS: Member[] = [
    {
        username: "sandra.g",
        password: "latte123",
        fullName: "Sandra García",
        membershipNumber: 5001
    },
    {
        username: "roberto.m",
        password: "capuccino456",
        fullName: "Roberto Martínez",
        membershipNumber: 5002
    },
    {
        username: "esteban.l",
        password: "espresso789",
        fullName: "Esteban López",
        membershipNumber: 5003
    }
];

export class MembersFakeService implements IDBService {
    async getMemberByCredentials(username: string, password: string): Promise<Member | null> {
        return FAKE_MEMBERS.find(m => 
            m.username === username && m.password === password
        ) || null;
    }
}