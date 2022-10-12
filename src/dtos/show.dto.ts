import { IsInt, IsNotEmpty } from "class-validator";

export class CreateShowDto {
  @IsNotEmpty()
  name: String

  @IsInt()
  stars: number
}
