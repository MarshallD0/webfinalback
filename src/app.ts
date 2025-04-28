import express from 'express';
import authRouter from './route/auth.route';

const app = express();
const PORT = 3001;

app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// Welcome route
app.get('/', (req, res) => {
    res.send('Bienvenido al Portal de Membresías de Café Aurora');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});