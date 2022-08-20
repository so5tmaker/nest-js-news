import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CategoryRepository } from "./category.repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository
  ) {}

  async createNewCategory(category: CreateCategoryDto) {
    return await this.categoryRepository.save(category);
  }
}
