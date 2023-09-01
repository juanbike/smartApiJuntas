/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { JuntasService } from './juntas/controllers/services/juntas.service';
import { JuntasController } from './juntas/controllers/controller/juntas.controller';
import { JuntaModule } from './junta/junta.module';


@Module({
  imports: [JuntaModule],
  controllers: [AppController, JuntasController],
  providers: [AppService, JuntasService],
})
export class AppModule {}
