import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({ where: { name } });

    return category;
  }
}

export { CategoriesRepository };
