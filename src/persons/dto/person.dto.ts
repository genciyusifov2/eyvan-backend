// src/persons/dto/person.dto.ts
import { IsString } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  name: string;

  @IsString()
  type: string; // Örnek: "driver" ya da "master"
}

export class UpdatePersonDto {
  @IsString()
  name?: string;

  @IsString()
  type?: string;
}
