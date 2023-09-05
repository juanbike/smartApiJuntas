import { Injectable } from '@nestjs/common';
import { Junta } from '../interface/juntas.entity';
import { CreateJuntaDto } from '../dto/create-junta.dto';

@Injectable()
export class JuntasService {
  private Juntas: Junta[] = [];

  getAllJuntas(): Junta[] {
    return this.Juntas;
  }

  getJunta(id: number): Junta {
    return this.Juntas.find((junta) => junta.id === id);
  }

  createJunta(createJuntaDto: CreateJuntaDto): Junta {
    const Junta = {
      id: this.Juntas.length + 1,
      ...createJuntaDto,
    };
    this.Juntas.push(Junta);
    return Junta;
  }

  updateJunta(id: number, updatedJunta: CreateJuntaDto): Junta {
    const index = this.Juntas.findIndex(Junta => Junta.id === id);
    if (index !== -1) {
      this.Juntas[index] = { ...this.Juntas[index], ...updatedJunta };
      return this.Juntas[index];
    }
    return null;
  }

  deleteJunta(id: number): void {
    this.Juntas = this.Juntas.filter((Junta) => Junta.id !== id);
  }
}
