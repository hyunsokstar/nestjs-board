import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { DatabaseModule } from '../database/database.module';
import { boardProviders } from './board.provider';

@Module({
  imports: [DatabaseModule],

  controllers: [BoardsController],
  providers: [...boardProviders, BoardsService],
})
export class BoardsModule {}
