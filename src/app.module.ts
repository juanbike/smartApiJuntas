/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JuntaModule } from './junta/juntas.module';

@Module({
  imports: [JuntaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
