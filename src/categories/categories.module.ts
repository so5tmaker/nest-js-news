import { Module } from "@nestjs/common";
import { CategoriesController } from "./categories.controller";
import { Categories } from "./categories.entity";
import { CategoriesService } from "./categories.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [TypeOrmModule.forFeature([Categories])],
})
export class CategoriesModule {}
