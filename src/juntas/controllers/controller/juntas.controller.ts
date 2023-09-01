/* eslint-disable prettier/prettier */
import { Get, Post, Put, Delete, Body, Param, Controller } from '@nestjs/common';
import { JuntasService } from './../services/juntas.service';
import { Junta } from './../interface/juntas.entity';
import { CreateJuntaDto } from '../dto/create-junta.dto';

  
@Controller('juntas')
  export class JuntasController {
    constructor(private readonly juntasService: JuntasService) {}

  @Get()
  async getAlljuntas(): Promise<Junta[]> {
    return this.juntasService.getAllJuntas();
  }

  @Get(':id')
  async getJuntas(@Param('id') id: number): Promise<Junta> {
    return this.juntasService.getJunta(id);
  }

  @Post()
  async createJuntas(@Body() createJuntaDto: CreateJuntaDto): Promise<Junta> {
    return this.juntasService.createJunta(createJuntaDto);
  }

  @Put(':id')
  async updateJuntas(
    @Param('id') id: number,
    @Body() createJuntaDto: CreateJuntaDto,
  ): Promise<Junta> {
    return this.juntasService.updateJunta(id, createJuntaDto);
  }

  @Delete(':id')
  async deleteJuntas(@Param('id') id: number): Promise<void> {
    return this.juntasService.deleteJunta(id);
  }
}
