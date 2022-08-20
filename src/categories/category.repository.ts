import { EntityRepository, Repository } from "typeorm";
import { Categories } from "./categories.entity";

@EntityRepository(Categories)
export class CategoryRepository extends Repository<Categories> {}
