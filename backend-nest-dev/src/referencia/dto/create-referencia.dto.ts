// src/referencia/dto/create-referencia.dto.ts
import { IsNotEmpty, IsOptional, IsDateString, IsString, IsNumber } from 'class-validator';

export class CreateReferenciaDto {
  @IsOptional()
  @IsDateString()
  fecha_ingreso?: Date | null;

  @IsNotEmpty()
  @IsDateString()
  fecha_envio: Date;

  @IsNotEmpty()
  @IsString()
  motivo_referencia: string;

  @IsOptional()
  @IsString()
  nombre_contacto_receptor?: string | null;

  @IsOptional()
  @IsString()
  medio_comunicacion?: string | null;

  @IsNotEmpty() // Cambiar a IsNotEmpty si es obligatorio
@IsDateString()
fecha_recepcion: Date; // Eliminar el ? para hacerlo obligatorio


  @IsNotEmpty() // Asegúrate de que sea obligatorio
@IsString()
hora_recepcion: string; // Eliminar el ? para hacerlo obligatorio


  @IsNotEmpty()
  @IsNumber()
  paciente_paciente_ID: number;

  @IsNotEmpty() // Asegúrate de que sea obligatorio
@IsNumber()
establecimiento_salud_receptor: number; // Eliminar el ? para hacerlo obligatorio


  @IsNotEmpty()
  @IsNumber()
  establecimiento_salud_referente: number;

  @IsOptional()
  @IsNumber()
  estado_aprobacion?: number | null;

  @IsNotEmpty()
  @IsNumber()
  estado: number;

  @IsOptional()
  @IsDateString()
  fecha_creacion?: Date | null;

  @IsOptional()
  @IsDateString()
  fecha_modificacion?: Date | null;

  @IsNotEmpty()
  @IsNumber()
  usuario_creacion: number;

  @IsOptional()
  @IsNumber()
  usuario_modificacion?: number | null;
}
