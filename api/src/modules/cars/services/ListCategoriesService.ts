import { Category } from '../infra/typeorm/entities/Category';
import { ICategoriesRepository } from '../infra/typeorm/repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
