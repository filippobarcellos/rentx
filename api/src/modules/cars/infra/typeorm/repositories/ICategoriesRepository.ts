import { Category } from '../entities/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category | undefined>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
