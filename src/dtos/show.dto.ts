import { ShowsTypes } from "@/interfaces/show.interface";
import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateShowDto {
  @IsNotEmpty()
  name: String

  @IsInt()
  stars: number

  @IsString()
  details: String

  @IsNotEmpty()
  releaseDate: String

  @IsEnum(ShowsTypes)
  type: ShowsTypes
}
