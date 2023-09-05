import { Module } from '@nestjs/common';
import { JuntasController } from './controller/juntas.controller';
import { JuntasService } from './services/juntas.service';
@Module({
  controllers: [JuntasController],
  providers: [JuntasService],
})
export class JuntaModule {}
