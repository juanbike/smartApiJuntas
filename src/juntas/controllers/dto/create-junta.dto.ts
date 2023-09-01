/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  IsPositive,
} from 'class-validator';

export class CreateJuntaDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  item: number;

  @IsNotEmpty()
  @IsString()
  nominal: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  nominal1: number;

  @IsNotEmpty()
  @IsString()
  numero_de_linea_o_sistema: string;

  @IsNotEmpty()
  @IsString()
  especificación: string;

  @IsNotEmpty()
  @IsString()
  schedule: string;

  @IsNotEmpty()
  @IsString()
  tipo_extremos: string;

  @IsNotEmpty()
  @IsString()
  tipo_material: string;

  @IsNotEmpty()
  @IsString()
  material: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  diam_inch_contabilizadas: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  factor_pulgadas_diametrales: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  pulgadas_diametrales: number;
}
