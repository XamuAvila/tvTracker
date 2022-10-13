import { IsNotEmpty } from "class-validator";

export class FavouriteShowDto {
  @IsNotEmpty()
  showId: string;

  @IsNotEmpty()
  userId: string;
}
