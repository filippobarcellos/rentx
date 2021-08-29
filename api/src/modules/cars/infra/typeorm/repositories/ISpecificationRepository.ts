import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  list(): Specification[];
  findByName(name: string): Specification | undefined;
  create(data: ICreateSpecificationDTO): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
