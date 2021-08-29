import { Request, Response } from 'express';

import { ICategoriesRepository } from './typeorm/repositories/ICategoriesRepository';

class ListCategoriesController {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  handle(request: Request, response: Response): Response {
    const categories = this.categoriesRepository.list();

    return response.status(200).json(categories);
  }
}

export { ListCategoriesController };
