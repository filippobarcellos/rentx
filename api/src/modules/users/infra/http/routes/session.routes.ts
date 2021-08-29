import { Router, Request, Response } from 'express';

import { AuthenticateUserService } from '../../../services/AuthenticateUserService';
import { UsersRepository } from '../../typeorm/repositories/UsersRepository';

const sessionRoutes = Router();

sessionRoutes.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const usersRepository = new UsersRepository();
  const authenticateUser = new AuthenticateUserService(usersRepository);

  const { user, token } = await authenticateUser.execute({ email, password });

  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return res.json({ user: userWithoutPassword, token });
});

export { sessionRoutes };
