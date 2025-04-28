import express from 'express';
import authRouter from './route/auth.route';
import cors from 'cors';
import { MembersFakeService } from './db/fake/members.fake.service';

const app = express();
const PORT = 3001;

// Configuración
app.use(cors());
app.use(express.json());

// Inyección de dependencias
const dbService = new MembersFakeService();
app.use('/api/auth', authRouter(dbService));

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});