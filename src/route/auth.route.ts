import { Router } from 'express';
import { AuthHandler } from '../handler/auth.handler';
import { AuthController } from '../controller/auth.controller';
import { MembersFakeService } from '../db/fake/members.fake.service';

const router = Router();
const membersService = new MembersFakeService();
const authController = new AuthController(membersService);
const authHandler = new AuthHandler(authController);

router.post('/login', authHandler.login.bind(authHandler));

export default router;