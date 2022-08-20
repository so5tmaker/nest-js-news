import { IsNotEmpty, Length } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty({ message: "The category should have a name" })
  @Length(3, 255)
  name: string;

  @IsNotEmpty()
  @Length(3)
  description: string;
}
