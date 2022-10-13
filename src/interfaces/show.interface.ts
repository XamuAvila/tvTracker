export interface Show {
  name: String,
  stars: number,
  details: String,
  releaseDate: Date,
  type: ShowsTypes
}

export enum ShowsTypes {
  "Terror" = 1,
  "Comedy" = 2,
  "Romance" = 3
}
