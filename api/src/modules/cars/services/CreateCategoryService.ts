import { Category } from '../infra/typeorm/entities/Category';
import { ICategoriesRepository } from '../infra/typeorm/repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): Category {
    const categoryExists = this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new Error('Category already exists');
    }

    const category = this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateCategoryUseCase };
