import { Specification } from '../infra/typeorm/entities/Specification';
import { ISpecificationRepository } from '../infra/typeorm/repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): Specification {
    const specificationExists = this.specificationRepository.findByName(name);

    if (specificationExists) {
      throw new Error('Specification already exists');
    }

    const category = this.specificationRepository.create({
      name,
      description,
    });

    return category;
  }
}

export { CreateSpecificationUseCase };
