import { IsInt, IsOptional, IsString, Matches, Max, Min, MinLength } from "class-validator";

export class GetTestModel {
  @MinLength(3)
  @IsString()
  name!: string;
}
