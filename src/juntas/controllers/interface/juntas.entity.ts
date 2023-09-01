/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString, IsNumber, Min, IsPositive } from 'class-validator';
export class Junta {
    /*
    id: number;
    info: {
      proyecto_id: string;
      cliente: string;
      fecha: string;
      titulo: string;
      elaborado: string;
      proyecto: string;
      tipo: string;
    };
    juntas:[ {
      id: number;  
      item: number;
      nominal: string;
      nominal1: number;
      numero_de_linea_o_sistema: string;
      especificación: string;
      schedule: string;
      tipo_extremos: string;
      tipo_material: string;
      material: string;
      diam_inch_contabilizadas: number;
      factor_pulgadas_diametrales: number;
      pulgadas_diametrales: number;
    }]
    */

    id: number 			

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