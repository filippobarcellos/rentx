import { Specification } from '../../entities/Specification';
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specification: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specification = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specification.push(specification);

    return specification;
  }

  list(): Specification[] {
    return this.specification;
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specification.find((c) => c.name === name);

    return specification;
  }
}

export { SpecificationRepository };
