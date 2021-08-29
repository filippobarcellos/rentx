import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import { CreateUserService } from '@modules/users/services/CreateUserService';
import { UpdateUserAvatarService } from '@modules/users/services/UpdateUserAvatarService';
import { ensureAuthenticared } from '../../../../../shared/infra/http/middlewares/ensureAuthenticated';
import { UsersRepository } from '../../typeorm/repositories/UsersRepository';

const usersRoutes = Router();
const upload = multer(uploadConfig);

usersRoutes.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const usersRepository = new UsersRepository();
  const createUser = new CreateUserService(usersRepository);

  const user = await createUser.execute({ name, email, password });

  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return res.json(userWithoutPassword);
});

usersRoutes.patch(
  '/avatar',
  ensureAuthenticared,
  upload.single('avatar'),
  async (req, res) => {
    const usersRepository = new UsersRepository();
    const user_id = req.user.id;

    const { filename } = req.file!;

    const updateAvatar = new UpdateUserAvatarService(usersRepository);

    const user = await updateAvatar.execute({ user_id, filename });

    return res.json(user);
  }
);

export { usersRoutes };
