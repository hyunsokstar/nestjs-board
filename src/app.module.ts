import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typerm.config';

@Module({
  imports: [BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
