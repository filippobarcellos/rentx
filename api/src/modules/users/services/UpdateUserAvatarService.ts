import fs from 'fs';
import path from 'path';

import uploadConfig from '@config/upload';
import { AppError } from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface Request {
  user_id: string;
  filename: string;
}
class UpdateUserAvatarService {
  constructor(private usersRepository: IUsersRepository) {}
  public async execute({ user_id, filename }: Request): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError(
        'Only authenticated users can change their avatar.',
        401
      );
    }

    if (user.avatar) {
      // delete previous avatar if user already have one
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }

      user.avatar = filename;

      await this.usersRepository.save(user);
    }
    return user;
  }
}

export { UpdateUserAvatarService };
