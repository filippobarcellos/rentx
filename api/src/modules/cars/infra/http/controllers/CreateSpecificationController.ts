import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from '../services/CreateSpecificationService';

class CreateSpecificationController {
  constructor(private CreateSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const specification = this.CreateSpecificationUseCase.execute({
      name,
      description,
    });

    return response.status(201).json(specification);
  }
}

export { CreateSpecificationController };
